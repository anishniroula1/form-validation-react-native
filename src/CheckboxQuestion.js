import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

const CheckBoxQuestion = ({question, onChange, onBlur, ref}) => {
    const [products, setProducts] = useState(question?.data);

    const handleChange = (value) => {
        let temp = products.map((product) => {
            if (value === product.value) {
                return { ...product, isChecked: !product.isChecked };
            }
            return product;
        });
        question.value = temp;
        setProducts(question.value);
    };

    useEffect(() => {
        let arrayFiltered;
        if (!!question.value){
            arrayFiltered = question?.data?.filter(data => {
                return question.value.some(val => {
                    if(data.value === val.value) {
                        data.isChecked = true;
                    }
                    return data
                })
            })
        }
        setProducts(arrayFiltered?.length > 0 ? arrayFiltered : question?.data);
    }, [])

    useEffect(() => {
        let selected = products.filter((product) => product.isChecked);
        onChange({[question.key]: selected});
    }, [products])

    return (
    <View style={styles.container}>
        {question?.label && <Text style={styles.label}>{question.label}</Text>}
        {products.map((res, index) => {
            return (
                <View key={index} style={styles.dataContainer}>
                    <Text style={styles.radioText}>{res.label}</Text>
                    <TouchableOpacity
                        onBlur={() => onBlur(question.key)}
                        style={!!question.error ? styles.radioCircleOnError :
                            res.isChecked ? styles.radioCircleOnFocus : styles.radioCircle}
                        onPress={() => handleChange(res.value)}>
                        {res.isChecked && <Text style={styles.checked}>√</Text>}
                    </TouchableOpacity>
                </View>
            );
        })}
        {!!question.error && (<View style={styles.errorContainer}>
            <Image style={styles.warning} source={require('../assets/warning.png')}/>
            <Text style={styles.error}>{question?.error?.message ?? question?.error?.title ?? question.error}</Text>
        </View>)
        }
    </View>
)

}

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        marginRight: 12,
        marginLeft: 12,
        padding: 10
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
        fontWeight: '500'
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
    }
});

export default CheckBoxQuestion;
