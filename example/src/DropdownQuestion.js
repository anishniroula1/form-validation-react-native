import React, {useRef} from "react";
import {View, StyleSheet, Platform, Image, Text} from "react-native";
import {Picker} from '@react-native-picker/picker';


const DropdownQuestion = ({question, onChange, onBlur, ref}) => {
    const [changeColor, setChangeColor] = React.useState(false);
    const handleOnBlur = (event) => {
        setChangeColor(false)
        return onBlur && onBlur(event)
    };
    const pickerRef = useRef();

    const open = () => {
        pickerRef.current.focus();
    }

    const close = () => {
        pickerRef.current.blur();
    }

    const picker = () => (
        <Picker
            style={Platform.OS === "ios" ? {} : [styles.picker]}
            itemStyle={Platform.OS === "ios" ? {} : styles.pickerItem}
            ref={ref ?? pickerRef}
            onBlur={() => handleOnBlur(question.key)}
            selectedValue={question.value || question.label}
            onValueChange={(itemValue, itemIndex) => onChange({[question.key]: itemValue})}
            enabled={question.enabled ?? true}
            mode={question.mode ?? ''}
            prompt={'Options'}
            accessibilityLabel={question.label ?? ''}
            onFocus={() => setChangeColor(true)}>
            <Picker.Item key={'unselectable'} label={question.label} value={0}/>
            {question?.data?.map((item, key) => (
                <Picker.Item
                    key={key}
                    label={item.label}
                    value={item.value}>
                </Picker.Item>
            ))}
        </Picker>
    );

    return (
        <View>
            {Platform.OS === "ios" ? (
                    <View>
                        {question?.label && <Text style={styles.label}>{question.label}</Text>}
                        {picker()}
                        {!!question.error && (<View style={styles.errorContainer}>
                            <Image style={styles.warning} source={require('../assets/warning.png')}/>
                            <Text style={styles.error}>{question.error}</Text>
                        </View>)
                        }
                    </View>
            ) : (
                <View style={styles.container}>
                    {picker()}
                </View>
            )}
            {!!question.error && (<View style={styles.errorContainer}>
                <Image style={styles.warning} source={require('../assets/warning.png')}/>
                <Text style={styles.error}>{question?.error?.message ?? question?.error?.title ?? question.error}</Text>
            </View>)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10,
    },
    label: {
        fontSize: 20,
        color: '#000',
        marginTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
    },
    picker: {
        width: '100%',
        backgroundColor: '#f1ecec',
        borderBottomWidth: 1,
        flex: 90
    },

    pickerItem: {
        height: 44,
        color: 'red'
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

export default DropdownQuestion;
