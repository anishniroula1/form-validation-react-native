import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import axios from 'axios';
import { useDebounce } from './useDebounce';
import SearchBarWithAutocomplete from './SearchBarWithAutocomplete';

const GOOGLE_PACES_API_BASE_URL = 'https://maps.googleapis.com/maps/api/place';

interface Props {
  query?: any;
  apiKey?: string;
  debounce?: number;
  styles?: any;
  inputWrapperStyle?: any;
  styleInput?: any;
  placeholder?: string;
  catchError?: any;
  fetchData?: any;
}

/**
 * Prediction's type returned from Google Places Autocomplete API
 * https://developers.google.com/places/web-service/autocomplete#place_autocomplete_results
 */

const GoogleMapAutoComplete = ({
  query = {},
  apiKey,
  debounce = 500,
  styles,
  inputWrapperStyle,
  styleInput,
  placeholder,
  catchError,
  fetchData,
}: Props) => {
  const [search, setSearch] = useState({ term: '', fetchPredictions: false });
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
    if (search.term.trim() === '') return;
    if (!search.fetchPredictions) return;

    const apiUrl = `${GOOGLE_PACES_API_BASE_URL}/autocomplete/json?key=${apiKey}&input=${
      search.term
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
  useDebounce(onChangeText, debounce, [search.term]);

  const abstractAddress = (item: any) => {
    const details = item?.data.result;
    const address = item?.data.result?.adr_address
      .replaceAll('> <', '>, <')
      .replaceAll('<span class="', '')
      .replaceAll('</span>', '')
      .replaceAll('">', ':')
      .replace('street-address', '"streetAddress"')
      .replace('locality', '"city"')
      .replace('region', '"state"')
      .replace('postal-code', '"postalCode"')
      .replace('country-name', '"countryName"');
    const concatAddress = `${address}, and`;
    const formattedAddress = concatAddress
      .replaceAll(':', ':"')
      .replaceAll(',', '",')
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
    fetchData({ addressDetails: addressDetails, result: item });
  };

  /**
   * Grab lattitude and longitude on prediction tapped
   *    by sending another reqyest using the place id.
   * You can check what kind of information you can get at:
   *    https://developers.google.com/maps/documentation/places/web-service/details#PlaceDetailsRequests
   */
  const onPredictionTapped = async (placeId: string, description: any) => {
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
        setSearch({ term: description, fetchPredictions: false });
        abstractAddress(result);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateShowPrediction = (date: any) => {
    setShowPredictions(date);
  };

  const updateSearch = (date: any) => {
    setSearch({ term: '', fetchPredictions: false });
  };

  return (
    <FlatList
      ListHeaderComponent={
        <View>
          <SearchBarWithAutocomplete
            style={styles}
            value={search.term}
            onChange={(text: any) => {
              setSearch({ term: text, fetchPredictions: true });
            }}
            showPredictions={showPredictions}
            setShowPredictions={updateShowPrediction}
            predictions={predictions}
            clearSearch={updateSearch}
            onPredictionTapped={onPredictionTapped}
            inputWrapperStyle={inputWrapperStyle}
            styleInput={styleInput}
            placeholder={placeholder}
            onBlur={() => setShowPredictions(false)}
          />
        </View>
      }
      data={[]}
      renderItem={null}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  body: {
    // paddingHorizontal: 20/
  },
});

export default GoogleMapAutoComplete;
