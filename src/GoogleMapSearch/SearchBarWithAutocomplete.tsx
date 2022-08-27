import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, TouchableOpacity, Text, Image } from 'react-native';

interface Props {
  defaultValue?: string;
  placeholder?: string;
  inputWrapperStyle?: any;
  styleInput?: any;
  value?: any;
  style?: Array<any>;
  onChange?: any;
  predictions?: Array<any>;
  showPredictions?: boolean;
  onPredictionTapped?: any;
  setShowPredictions?: any;
  clearSearch?: any;
  onBlur?: any;
}
const SearchBarWithAutocomplete = ({
  defaultValue,
  placeholder,
  inputWrapperStyle,
  styleInput,
  value,
  style = [],
  onChange,
  predictions = [],
  showPredictions = true,
  onPredictionTapped,
  setShowPredictions,
  clearSearch,
  onBlur,
}: Props) => {
  const [inputSize, setInputSize] = useState({ width: 0, height: 0 });

  const { image, inputStyle, inputWrapper, resultWrapper } = styles;
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style;

  const clearValue = () => {
    clearSearch({ term: '', fetchPredictions: false });
    setShowPredictions(false);
  };

  const _renderPredictions = (predictions: any) => {
    const { predictionsContainer, predictionRow } = styles;
    const calculatedStyle = {
      width: inputSize.width,
    };

    return (
      <FlatList
        data={predictions}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={predictionRow}
              onPress={() => onPredictionTapped(item.place_id, item.description)}>
              <Text numberOfLines={1}>{item.description}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.place_id}
        keyboardShouldPersistTaps="handled"
      />
    );
  };

  return (
    <View style={[{ ...passedStyles }]}>
      <View style={inputWrapperStyle ?? inputWrapper}>
        <View style={{ flex: 1 }}>
          <TextInput
            onBlur={onBlur}
            style={styleInput ?? [inputStyle]}
            placeholder={placeholder ?? 'Search by address'}
            underlineColorAndroid={'transparent'}
            placeholderTextColor="gray"
            defaultValue={defaultValue ? defaultValue.toString() : value}
            onChangeText={onChange}
            returnKeyType="search"
            onLayout={(event) => {
              const { height, width } = event.nativeEvent.layout;
              setInputSize({ height, width });
            }}
          />
        </View>
        {!defaultValue && (
          <View style={{ flex: 0.1 }}>
            <TouchableOpacity onPress={() => clearValue()}>
              <Image style={image} source={require('./cancel.png')} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={resultWrapper}>{showPredictions && _renderPredictions(predictions)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    fontSize: 20,
  },
  predictionsContainer: {},
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
  resultWrapper: {
    marginLeft: 12,
  },
  image: {
    height: 25,
    width: 25,
    tintColor: '#D7C7C7FF',
    marginLeft: 10,
  },
});

export default SearchBarWithAutocomplete;
