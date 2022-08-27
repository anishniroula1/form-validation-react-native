import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

interface Props {
  title: string;
  onPress?: any;
  buttonStyle?: any;
  textStyle?: any;
  highlightColor?: any;
  disabled?: boolean;
  disabledStyle?: any;
}
export default function FormButton({
  disabled,
  onPress,
  title,
  buttonStyle,
  textStyle,
  highlightColor,
  disabledStyle,
}: Props) {
  return (
    <TouchableHighlight
      style={disabled ? disabledStyle : buttonStyle ?? styles.button}
      onPress={onPress}
      underlayColor={highlightColor ?? '#c84648'}>
      <Text style={textStyle ?? styles.text}>{title ?? 'Submit'}</Text>
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
