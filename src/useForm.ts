import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

const useForm = (validate?: any, runOnSubmit?: any, initialState?: Object | any) => {
  const [values, setValues] = useState(!!initialState ? initialState : {});
  const [errors, setErrors] = useState<Object | any>({});

  const [touched, setTouched] = useState<Array<any>>([]);
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

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
        Alert.alert(
          error?.title ?? error,
          error?.message ?? '',
          error?.buttons ?? [{ text: 'OK' }]
        );
        setTouched([...Object.keys(errors)]);
        setSubmitting(false);
      }
    }
  }, [errors]);

  useEffect(() => {
    if (!!validate(values)) {
      const validationErrors = validate(values);
      const touchedErrors = Object.keys(validationErrors)
        .filter((key) => touched.includes(key))
        .reduce((acc: any, key: string | number) => {
          if (!acc[key]) {
            acc[key] = validationErrors[key];
          }
          return acc;
        }, {});
      setErrors(touchedErrors);
    }
  }, [touched, values]);

  const handleChange = (event: any) => {
    const key = Object.keys(event)[0];
    setValues({ ...values, [key]: event[key] });
  };

  const handleBlur = (event: any) => {
    setTouched([...touched, event]);
  };

  const handleSubmit = (event: any) => {
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
    setValues,
  };
};

export default useForm;
