import React from 'react';
import { ScrollView, View } from 'react-native';
import useForm from './useForm';
import TextBoxQuestion from './TextBoxQuestion';
import { userQuestions } from './userQuestion';
import BigTextQuestion from './BigTextQuestion';
import PickerQuestion from './PickerQuestion';
import VerticalPickerQuestion from './VerticalPickerQuestion';
import SearchableDropdown from './SearchableDropdown';
import CheckBoxQuestion from './CheckboxQuestion';
import SelectAllQuestion from './SelectAllQuestion';
import SingleCheckBoxQuestion from './SingleCheckboxQuestion';
import RadioButtonQuestion from './RadioButtonQuestion';
import GoogleMapAutoCompleteQuestion from "./GoogleMapSearch/GoogleMapAutoCompleteQuestion";

export default function Example() {
  const initialState = {
    country: [],
    pickers: [],
    firstName: 'Anish',
    termCondition: true,
  };
  const { handleBlur, handleChange, handleSubmit, values, errors, setValues } = useForm(
    () => {},
    () => {},
    initialState
  );
  const question = userQuestions(values, errors);
  const handlePickerChange = (value: any) => {
    setValues({ ...value, countries: value.countries, tos: '' });
  };
  return (
    <ScrollView nestedScrollEnabled={true}>
      <TextBoxQuestion question={question.phone} onChange={handleChange} onBlur={handleBlur} />
      <GoogleMapAutoCompleteQuestion question={question.firstName} onChange={handleChange} onBlur={handleBlur} />
      <BigTextQuestion question={question.firstName} onChange={handleChange} onBlur={handleBlur} />
      <TextBoxQuestion question={question.date} onChange={handleChange} onBlur={handleBlur} />
      <SearchableDropdown question={question.country} onChange={handleChange} onBlur={handleBlur} />
      <VerticalPickerQuestion
        question={question.picker}
        onChange={handleChange}
        onBlur={handleBlur}
        messageOnEmpty={'Please select an option'}
      />

      <CheckBoxQuestion
        question={question.country}
        onChange={handlePickerChange}
        onBlur={handleBlur}
      />
      <PickerQuestion
        question={question.countries}
        onChange={handlePickerChange}
        onBlur={handleBlur}
      />
      <PickerQuestion question={question.tos} onChange={handleChange} onBlur={handleBlur} />
      <SelectAllQuestion question={question.country} onChange={handleChange} onBlur={handleBlur} />
      <RadioButtonQuestion question={question.tos2} onChange={handleChange} onBlur={handleBlur} />
      <SingleCheckBoxQuestion
        question={question.termCondition}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </ScrollView>
  );
}
