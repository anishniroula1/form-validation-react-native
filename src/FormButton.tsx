import React from 'react';
import {Text, StyleSheet, TouchableHighlight, ActivityIndicator} from 'react-native';

interface Props {
  title: string;
  onPress?: any;
  buttonStyle?: any;
  textStyle?: any;
  highlightColor?: any;
  disabled?: boolean;
  disabledStyle?: any;
  spinnerColor?: string;
}
export default function FormButton({
  disabled,
  onPress,
  title,
  buttonStyle,
  textStyle,
  highlightColor,
  spinnerColor
}: Props) {
  return (
    <TouchableHighlight
      disabled={disabled}
      style={buttonStyle ?? styles.button}
      onPress={onPress}
      underlayColor={highlightColor ?? '#c84648'}>
      {!disabled ? <Text style={textStyle ?? styles.text}>{title ?? 'Submit'}</Text> : <ActivityIndicator color={spinnerColor ?? 'white'} size={'small'} />}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#0e9de3',
    margin: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
