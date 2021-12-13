import React from "react";
import {View, Text, TextInput, StyleSheet, Image} from "react-native";

const TextBoxQuestion = ({question, onChange, onBlur, ref}) => {
    const [changeColor, setChangeColor] = React.useState(false);
    const handleOnBlur = (event) => {
        setChangeColor(false)
        return onBlur && onBlur(event)
    };

    return (
        <View>
            <TextInput
                style={!!question.error ? styles.textInputOnError : changeColor ? styles.textInputOnFocus : styles.textInput}
                onBlur={() => handleOnBlur(question.key)}
                ref={ref}
                value={question.value}
                onChangeText={data => onChange({[question.key]: data})}
                placeholder={question.placeholder ?? question.label ?? ''}
                placeholderTextColor={question.placeholderTextColor ?? '#9f9b9b'}
                underlineColorAndroid={question.underlineColorAndroid ?? "transparent"}
                keyboardType={question.keyboardType ?? 'default'} //'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad'
                maxLength={question.maxlength ?? 1.0e+9}
                minLength={question.minLength ?? 0}
                autoCapitalize={question.autoCapitalize ?? "none"}
                multiline={question.multiline ?? false}
                autoFocus={question.autoFocus ?? false}
                numberOfLines={question.numberOfLines ?? 1}
                scrollEnabled={question.scrollEnabled ?? true}
                secureTextEntry={question.secureTextEntry ?? false}
                editable={question.editable ?? true}
                onFocus={() => setChangeColor(true)}
            />
            {!!question.error && (<View style={styles.errorContainer}>
                <Image style={styles.warning} source={require('../assets/warning.png')}/>
                <Text style={styles.error}>{question?.error?.message ?? question?.error?.title ?? question.error}</Text>
            </View>)
            }

        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        margin: 12,
        borderColor: "#D7C7C7FF",
        borderBottomWidth: 1,
        fontSize: 20,
        padding: 10,
    },
    textInputOnFocus: {
        height: 40,
        margin: 12,
        borderColor: "#0e9de3",
        borderBottomWidth: 1,
        fontSize: 20,
        padding: 10,
    },
    textInputOnError: {
        height: 40,
        margin: 12,
        borderColor: "#f90201",
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
    }
});

export default TextBoxQuestion;
