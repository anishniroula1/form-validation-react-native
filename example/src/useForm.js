import { useState, useEffect } from 'react';
import {Alert} from "react-native";

const useForm = (validate, runOnSubmit, initialState) => {
    const [values, setValues] = useState(!!initialState ? initialState : {});
    const [errors, setErrors] = useState({});

    const [touched, setTouched] = useState([]);
    const [isSubmitting, setSubmitting] = useState(false);


    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                setTouched([]);
                runOnSubmit();
                setSubmitting(false);
            } else {
                const errorName = Object.keys(errors);
                const error = errors[errorName[0]];
                Alert.alert(error?.title ?? error,
                    error?.message ?? '',
                    error?.buttons ?? [{text: 'OK'}]);
                setTouched([...Object.keys(errors)]);
                setSubmitting(false);
            }
        }
    }, [errors]);

    useEffect(() => {
        if(!!validate(values)) {
            const validationErrors = validate(values);
            const touchedErrors = Object.keys(validationErrors)
                .filter(key => touched.includes(key))
                .reduce((acc, key) => {
                    if (!acc[key]) {
                        acc[key] = validationErrors[key]
                    }
                    return acc
                }, {});
            setErrors(touchedErrors);
        }
    }, [touched, values]);

    const handleChange = (event) => {
        const key = Object.keys(event)[0];
        setValues({...values, [key]: event[key]});
    };

    const handleBlur = (event) => {
        setTouched([...touched, event])
    };

    const handleSubmit = (event) => {
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
    };

    return {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting,
        setValues
    };
};

export default useForm;
