import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
import { useDebounce } from './useDebounce';
import { getCountryNameByCode, getStateValueByCode } from '../AlertMessage';
import { Question } from '../type';

// import { env } from './env'

const GOOGLE_PACES_API_BASE_URL = 'https://maps.googleapis.com/maps/api/place';

interface Props {
  question: Question;
  onChange: any;
  onBlur: any;
  apiKey?: string;
  styleContainer?: any;
  labelStyle?: any;
  bodyStyle?: any;
  fetchData?: any;
  query?: any;
  debounce?: number;
  styleInput?: any;
  showStreet?: boolean;
  showCity?: boolean;
  showCountry?: boolean;
  showPostalCode?: boolean;
  businessName?: boolean;
  setValues?: any;
}

/**
 * Prediction's type returned from Google Places Autocomplete API
 * https://developers.google.com/places/web-service/autocomplete#place_autocomplete_results
 */

const GoogleMapAutoCompleteQuestion = ({
  fetchData,
  query = {},
  question,
  onBlur,
  onChange,
  styleContainer,
  labelStyle,
  apiKey,
  debounce = 500,
  styleInput,
  showStreet = false,
  bodyStyle,
  showCity = false,
  showCountry = false,
  showPostalCode = false,
  businessName = false,
  setValues,
}: Props) => {
  const [changeColor, setChangeColor] = React.useState(false);
  const [showPredictions, setShowPredictions] = useState(false);
  const [predictions, setPredictions] = useState([
    {
      description: '',
      place_id: '',
      reference: '',
      matched_substrings: [],
      tructured_formatting: {},
      terms: [{}],
      types: [],
    },
  ]);
  const [fetchPredictions, setFetchPrediction] = useState(false);

  // this is just a example
  /*const query = {
        components: 'country:US|country:IN',
        language: 'fr',
    }*/

  // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
  // https://developers.google.com/maps/documentation/places/web-service/search-text
  const createQueryString = (query: any) => {
    return Object.keys(query)
      .map((key) => {
        let val = query[key];
        if (val !== null && typeof val === 'object') val = createQueryString(val);
        return `${key}=${val}`.replace(/\s/g, '_');
      })
      .join('&');
  };

  /**
   * Grab predictions on entering text
   *    by sending reqyest to Google Places API.
   * API details: https://developers.google.com/maps/documentation/places/web-service/autocomplete
   */
  const onChangeText = async () => {
    if (!!question?.value && question?.value.trim() === '') return;
    if (!fetchPredictions) return;

    const apiUrl = `${GOOGLE_PACES_API_BASE_URL}/autocomplete/json?key=${apiKey}&input=${
      question?.value
    }&${createQueryString(query)}`;
    try {
      const result = await axios.request({
        method: 'post',
        url: apiUrl,
      });
      if (result) {
        const {
          data: { predictions },
        } = result;
        setPredictions(predictions);
        setShowPredictions(true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useDebounce(onChangeText, debounce, [!!question?.value && question?.value]);

  const abstractAddress = (item: any, description: any) => {
    const details = item?.data.result;
    const address = item?.data.result?.adr_address
      .split('> <')
      .join('>, <')
      .split('<span class="')
      .join('')
      .split('</span>')
      .join('')
      .split('">')
      .join(':')
      .replace('street-address', '"streetAddress"')
      .replace('locality', '"city"')
      .replace('region', '"state"')
      .replace('postal-code', '"postalCode"')
      .replace('country-name', '"countryName"');
    const concatAddress = `${address}, and`;
    const formattedAddress = concatAddress
      .split(':')
      .join(':"')
      .split(',')
      .join('",')
      .replace(', and', '');
    const addressDetails = {
      address: JSON.parse(`{${formattedAddress}}`),
      formatted_address: details?.formatted_address ?? '',
      formatted_phone_number: details?.formatted_phone_number ?? '',
      international_phone_number: details?.international_phone_number ?? '',
      longitude: details?.geometry?.location.lng ?? '',
      latitude: details?.geometry?.location.lat ?? '',
      name: details.name ?? '',
      weekday_text: details?.opening_hours?.weekday_text ?? [],
      viewport: details?.geometry?.viewport,
    };

    fetchData && fetchData({ addressDetails: addressDetails, result: item });
    if (showStreet) {
      onChange({ [question.key]: addressDetails?.address?.streetAddress });
    } else if (showCity) {
      onChange({ [question.key]: addressDetails?.address?.city });
    } else if (showCountry) {
      onChange({ [question.key]: addressDetails?.address?.countryName });
    } else if (showPostalCode) {
      onChange({ [question.key]: addressDetails?.address?.postalCode });
    } else if (businessName) {
      onChange({ [question.key]: details?.name });
    } else {
      onChange({ [question.key]: description });
    }

    setValues &&
      setValues((prev: any) => {
        return {
          ...prev,
          city: addressDetails?.address?.city,
          zipCode: addressDetails?.address?.postalCode,
          state: getStateValueByCode(addressDetails?.address?.state),
          country: getCountryNameByCode(addressDetails?.address?.countryName),
        };
      });
  };

  /**
   * Grab lattitude and longitude on prediction tapped
   *    by sending another reqyest using the place id.
   * You can check what kind of information you can get at:
   *    https://developers.google.com/maps/documentation/places/web-service/details#PlaceDetailsRequests
   */
  const onPredictionTapped = async (placeId: string, description: any) => {
    setFetchPrediction(false);
    const apiUrl = `${GOOGLE_PACES_API_BASE_URL}/details/json?key=${apiKey}&place_id=${placeId}`;
    try {
      const result = await axios.request({
        method: 'post',
        url: apiUrl,
      });
      if (result) {
        const {
          data: {
            result: {
              geometry: { location },
            },
          },
        } = result;
        const { lat, lng } = location;
        setShowPredictions(false);
        setFetchPrediction(false);
        abstractAddress(result, description);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleOnFocus = () => {
    setChangeColor(true);
  };

  const clearValue = () => {
    onChange({ [question.key]: '' });
    setFetchPrediction(false);
    setShowPredictions(false);
  };

  const handleBlur = () => {
    onBlur(question?.key);
    setChangeColor(false)
    // setShowPredictions(false);
  };

  const { image, inputStyle, resultWrapper } = styles;

  const renderPredictions = (predictions: any) => {
    const { predictionRow } = styles;

    return (
      <View>
        {predictions?.length > 0 &&
          predictions?.map((item: any, index: number) => (
            <TouchableOpacity
              key={index}
              style={predictionRow}
              onPress={() => onPredictionTapped(item.place_id, item.description)}>
              <Text style={labelStyle} numberOfLines={1}>
                {item.description}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    );
  };

  return (
    <View style={styleContainer}>
      <View
        style={
          !!question.error
            ? styles.inputWrapperOnError
            : changeColor
            ? styles.inputWrapperOnFocus
            : styles.inputWrapper
        }>
        <View style={{ flex: 1 }}>
          <TextInput
            clearButtonMode="always"
            onFocus={() => handleOnFocus()}
            onBlur={handleBlur}
            style={styleInput ?? [inputStyle]}
            placeholder={question?.placeholder ?? question?.label ?? 'Search by address'}
            underlineColorAndroid={'transparent'}
            placeholderTextColor="gray"
            defaultValue={question?.value}
            onChangeText={(text) => {
              onChange({ [question.key]: text });
              setFetchPrediction(true);
            }}
          />
        </View>
      </View>
      <View style={bodyStyle ?? resultWrapper}>
        {showPredictions && renderPredictions(predictions)}
      </View>
      {!!question.error && (
        <View style={styles.errorContainer}>
          <Image style={styles.warning} source={require('../../assets/warning.png')} />
          <Text style={styles.error}>
            {question?.error?.message ?? question?.error?.title ?? question?.error}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    fontSize: 20,
    padding: 10,
  },
  predictionRow: {
    paddingBottom: 15,
    marginBottom: 15,
    borderBottomColor: '#e5dfdf',
    borderBottomWidth: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    borderColor: '#D7C7C7FF',
    borderBottomWidth: 1,
    margin: 12,
  },
  inputWrapperOnFocus: {
    flexDirection: 'row',
    margin: 12,
    borderColor: '#0e9de3',
    borderBottomWidth: 1,
  },
  inputWrapperOnError: {
    flexDirection: 'row',
    margin: 12,
    borderColor: '#f90201',
    borderBottomWidth: 1,
  },
  resultWrapper: {
    marginLeft: 12,
  },
  image: {
    height: 23,
    width: 23,
    tintColor: '#D7C7C7FF',
    marginRight: 10,
    bottom: -10,
  },
  errorContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  warning: {
    height: 15,
    width: 15,
    marginTop: 2.3,
  },
  error: {
    color: '#f90201',
    paddingLeft: 5,
    fontSize: 15,
  },
});

export default GoogleMapAutoCompleteQuestion;
