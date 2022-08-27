import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import SideBySideItem from './SideBySideItem';
import { Question } from './type';

interface Props {
  question: Question;
  onBlur: any;
  onChange: any;
  labelStyle?: any;
  defaultValue?: any;
  disabled?: boolean;
}

const SingleCheckBoxQuestion = ({
  question,
  onChange,
  onBlur,
  defaultValue,
  labelStyle,
  disabled,
}: Props) => {
  const [checked, setChecked] = useState(question?.value);

  useEffect(() => {
    if (defaultValue) {
      setChecked(true);
      onChange({ [question.key]: true });
    }
  }, [defaultValue]);

  const handleChange = () => {
    setChecked(!checked);
    onChange({ [question.key]: !checked });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onBlur={() => onBlur(question.key)}
        disabled={disabled}
        onPress={() => handleChange()}
        style={styles.dataContainer}>
        <SideBySideItem
          container={{ alignItems: 'center' }}
          flex1={0}
          flex2={1}
          firstItem={
            <View
              style={
                !!question.error
                  ? styles.radioCircleOnError
                  : checked
                  ? styles.radioCircleOnFocus
                  : styles.radioCircle
              }>
              {checked && <Text style={styles.checked}>√</Text>}
            </View>
          }
          secondItem={
            question?.label && <Text style={labelStyle ?? styles.label}>{question.label}</Text>
          }
        />
      </TouchableOpacity>
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
    marginTop: 12,
    marginRight: 12,
    marginLeft: 12,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 2,
  },
  dataContainer: {
    marginBottom: 5,
  },
  radioCircle: {
    borderRadius: 7,
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: '#696464',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleOnFocus: {
    borderRadius: 7,
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: '#0e9de3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleOnError: {
    borderRadius: 7,
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: '#f90201',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    color: '#0e9de3',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    flexDirection: 'row',
  },
  warning: {
    height: 15,
    width: 15,
    marginTop: 4,
  },
  error: {
    color: '#f90201',
    paddingLeft: 5,
    fontSize: 15,
  },
});

export default SingleCheckBoxQuestion;
