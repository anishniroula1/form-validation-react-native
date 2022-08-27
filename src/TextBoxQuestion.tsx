import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TextInputProps, Animated } from 'react-native';
import { Question } from './type';
import AnimatedLabel from './AnimatedLabel';
import { formatDate, formatPhoneNumber } from './utils';

interface Props {
  question: Question;
  onChange: any;
  onBlur: any;
  labelStyle?: any;
  value?: any;
  textInputStyle?: any;
  inputPros?: TextInputProps;
  ref?: any;
}
const TextBoxQuestion: React.FC<Props> = ({
  question,
  onChange,
  onBlur,
  value,
  textInputStyle,
  labelStyle,
  inputPros,
  ref,
}) => {
  const [maskInput, setMaskInput] = useState('');
  const [changeColor, setChangeColor] = React.useState(false);
  const handleOnBlur = (event: any) => {
    setChangeColor(false);
    return onBlur && onBlur(event);
  };

  const handleChange = (event: any) => {
    if (!!question?.mask && question.mask === 'phone') {
      return onChange({ [question.key]: formatPhoneNumber(event, question?.countryCode) });
    } else if (!!question?.mask && question.mask === 'date') {
      return onChange({ [question.key]: formatDate(event) });
    } else if (!!question?.customMaskFormatter) {
      return onChange({ [question.key]: question?.customMaskFormatter(event) });
    } else return onChange({ [question.key]: event });
  };
  return (
    <View>
      <AnimatedLabel question={question} labelStyle={labelStyle} />
      <TextInput
        ref={ref}
        clearButtonMode={question?.clearButtonMode ?? 'always'}
        style={
          !!question.error
            ? [textInputStyle, styles.textInputOnError]
            : changeColor
            ? [textInputStyle, styles.textInputOnFocus]
            : [textInputStyle, styles.textInput]
        }
        onBlur={() => handleOnBlur(question.key)}
        value={value ?? question.value}
        onChangeText={handleChange}
        placeholder={question.placeholder ?? question.label ?? ''}
        placeholderTextColor={question.placeholderTextColor ?? '#9f9b9b'}
        underlineColorAndroid={question.underlineColorAndroid ?? 'transparent'}
        keyboardType={question.keyboardType ?? 'default'} //'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad'
        maxLength={question.maxlength ?? 1.0e9}
        autoCapitalize={question.autoCapitalize ?? 'none'}
        multiline={question.multiline ?? false}
        autoFocus={question.autoFocus ?? false}
        numberOfLines={question.numberOfLines ?? 1}
        scrollEnabled={question.scrollEnabled ?? true}
        secureTextEntry={question.secureTextEntry ?? false}
        editable={question.editable ?? true}
        onFocus={() => setChangeColor(true)}
        {...inputPros}
      />
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
  labelStyle: {
    color: '#9f9b9b',
    fontSize: 15,
    marginLeft: 20,
    marginBottom: -10,
  },
  textInput: {
    marginTop: 0,
    margin: 12,
    borderColor: '#D7C7C7FF',
    borderBottomWidth: 1,
    fontSize: 20,
    padding: 10,
  },
  textInputOnFocus: {
    marginTop: 0,
    margin: 12,
    borderColor: '#0e9de3',
    borderBottomWidth: 1,
    fontSize: 20,
    padding: 10,
  },
  textInputOnError: {
    marginTop: 0,
    margin: 12,
    borderColor: '#f90201',
    borderBottomWidth: 1,
    fontSize: 20,
    padding: 10,
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

export default TextBoxQuestion;
