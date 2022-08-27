import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import SideBySideItem from './SideBySideItem';
import { Question } from './type';

interface Props {
  question: Question;
  onBlur?: any;
  onChange: any;
  labelStyle?: any;
  textStyle?: any;
  ref?: any;
}
const RadioButtonQuestion = ({ question, onChange, onBlur, ref, labelStyle, textStyle }: Props) => {
  // onBlur, ref keeping for future use in case... not using now
  return (
    <View style={styles.container}>
      {question?.label && <Text style={labelStyle ?? styles.label}>{question.label}</Text>}
      {question?.data?.map((res, index) => {
        return (
          <TouchableOpacity
            onPress={() => onChange({ [question.key]: res.value })}
            key={index}
            style={styles.dataContainer}>
            <SideBySideItem
              container={{ alignItems: 'center' }}
              firstItem={<Text style={textStyle ?? styles.radioText}>{res.label}</Text>}
              secondItem={
                <View
                  style={
                    !!question.error
                      ? styles.radioCircleOnError
                      : question.value === res.value
                      ? styles.radioCircleOnFocus
                      : styles.radioCircle
                  }>
                  {question.value === res.value && <View style={styles.selectedRb} />}
                </View>
              }
              flex2={0}
            />
          </TouchableOpacity>
        );
      })}
      {!!question.error && (
        <View style={styles.errorContainer}>
          <Image style={styles.warning} source={require('../assets/warning.png')} />
          <Text style={styles.error}>
            {question?.error?.message ?? question?.error?.title ?? question.error}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
    padding: 10,
  },
  label: {
    fontSize: 20,
    color: '#000',
    paddingBottom: 15,
  },
  dataContainer: {
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioText: {
    marginRight: 35,
    fontSize: 20,
    color: '#696464',
    fontWeight: '500',
  },
  radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#696464',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleOnFocus: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#0e9de3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleOnError: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#f90201',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#0e9de3',
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
  errorContainer: {
    flexDirection: 'row',
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

export default RadioButtonQuestion;
