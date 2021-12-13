import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

export default function FormButton({onPress, title, buttonStyle, textStyle, highlightColor}) {
    return (
        <TouchableHighlight style={buttonStyle ?? styles.button} onPress={onPress} underlayColor={highlightColor ?? '#c84648'}>
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
        margin:12,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
