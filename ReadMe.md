# Form Validation for React Native
***
Form validation react native is a simple library to validate your form in React Native App. It is easy to use and it includes
text box, checkbox, radio button and dropdown field. It will validate all your field on the click of button.

## 1. Installation
***
##### NPM
    npm install form-validation-react-native

##### Yarn
    yarn add form-validation-react-native

## 2. Use it in your app
***
As of right now this will only work in IOS and Android. Soon we will cover Expo.

    import {DropdownQuestion, TextBoxQuestion, FormButton, useForm} from "form-validation-react-native";
        <View>
            <TextBoxQuestion question={question.firstName} onChange={handleChange} onBlur={handleBlur}/>
            <DropdownQuestion question={question.country} onChange={handleChange} onBlur={handleBlur}/>
            <TextBoxQuestion question={question.email} onChange={handleChange} onBlur={handleBlur}/>
            <FormButton onPress={handleOnButtonPress} title={"Any Name"} />
        </View>

## 3. You don't need any state to see your changes. All input field will set as object in one state, and you can use it however you like.
***
- Let's see how to implement this.

 ```
 import { Validators } from './Validators';
import { Alert } from 'react-native';
import { alertMessage } from './AlertMessage';
import { Question } from './type';

export const userQuestions = (values: any, errors: any) => {
  return {
    // Text Box
    firstName: {
      value: values.firstName,
      key: 'firstName',
      label: 'First Name',
      error: errors.firstName,
      showTopLabel: true,
    } as Question,
    lastName: {
      value: values.lastName,
      key: 'lastName',
      label: 'Last Name',
      error: errors.lastName,
    },
    address: {
      value: values.address,
      key: 'address',
      label: 'Address',
      error: errors.address,
    },
    city: {
      value: values.city,
      key: 'city',
      label: 'City',
      error: errors.city,
    },
    zipCode: {
      value: values.zipCode,
      key: 'zipCode',
      label: 'Zip Code',
      error: errors.zipCode,
    },
    description: {
      value: values.description,
      key: 'description',
      label: 'Description',
      error: errors.description,
      multiline: true,
      numberOfLines: 2,
    },
    email: {
      // text box
      value: values.email,
      key: 'email',
      label: 'Email address',
      /*max: 5,
      min: 5,*/
      error: errors.email,
    },
    password: {
      value: values.password,
      key: 'password',
      label: 'Password',
      minLength: 8,
      secureTextEntry: true,
      error: errors.password,
    },
    date: {
      value: values.date,
      key: 'date',
      label: 'Date',
      mask: 'date',
      error: errors.date,
    } as Question,
    // Phone Text
    phone: {
      value: values.phone,
      key: 'phone',
      label: 'Phone Number',
      maxLength: 10,
      minLength: 2,
      keyboardType: 'numeric',
      mask: 'phone',
      error: errors.phone,
    } as Question,

    // single check box return true or false
    accept: {
      value: values.accept,
      key: 'accept',
      label: 'Accept Term and Condition',
      error: errors.accept,
    },
    // Searcha able dropdown
    countries: {
      value: values.countries,
      key: 'countries',
      label: 'Choose From List of Countries',
      data: ['India', 'USA'],
      //     {value: 'India', label: 'India'},
      //     {value: 'USA', label: 'USA'},
      //     {value: 'Brazil', label: 'Brazil'},
      //     {value: 'Germany', label: 'Germany'},
      //     {value: 'India', label: 'India'},
      // ],
      error: errors.countries,
    },
    // Radio Button for single choices
    country: {
      value: values.country,
      key: 'country',
      label: 'Choose a country',
      data: [
        { value: 'India', label: 'India' },
        { value: 'USA', label: 'USA' },
        { value: 'UK', label: 'UK' },
        { value: 'Germany', label: 'Germany' },
        { value: 'Russia', label: 'Russia' },
        { value: 'Italy', label: 'Italy' },
      ],
      error: errors.country,
    },
    // Picker
    picker: {
      value: values.picker,
      key: 'picker',
      label: 'Picker',
      data: [1, 2, 3, 4, 5, 6, 7, 8],
      error: errors.picker,
    } as Question,
    // Group Check boxes
    sport: {
      value: values.sport,
      key: 'sport',
      label: 'Select your favorite Sport(s)?',
      data: [
        { value: 'Soccer', label: 'Soccer' },
        { value: 'Cricket', label: 'Cricket' },
      ],
      error: errors.sport,
    },
    // Group Check boxes
    hello: {
      value: values.hello,
      key: 'hello',
      label: 'What are your favorite hobbies?',
      data: [
        { value: 'Hiking', label: 'Hiking', isChecked: true },
        { value: 'Traveling', label: 'Traveling', isChecked: true },
        { value: 'Coding', label: 'Coding', isChecked: true },
      ],
      error: errors.hello,
    },
    category: {
      // Group Check boxes
      value: values.category,
      key: 'category',
      label: 'Category',
      data: [
        {
          id: 'aLE2c7vrX7inAvR2VO9S',
          label: 'Gyms',
          photo:
            'https://images.unsplash.com/photo-1595909315417-2edd382a56dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          value: 'Gyms',
        },
        {
          id: 'Yx0LEc0Gt7Mylnne8tiG',
          label: 'Cleaning',
          photo:
            'https://images.unsplash.com/photo-1596263373793-6de9aa1b6a53?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGNsZWFuaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          value: 'Cleaning',
        },
        {
          id: 'N7P8x4uZHuWe2OD5JEQL',
          label: 'Beauty Salons',
          photo:
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          value: 'Beauty Salons',
        },
        {
          id: 'JKoNHb8UzFLg9JwN2dF6',
          label: 'Chiropractors',
          photo:
            'https://images.unsplash.com/photo-1539815208687-a0f05e15d601?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpcm9wcmFjdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          value: 'Chiropractors',
        },
        {
          id: 'Zo3osXz2xExTo1FZWE84',
          label: 'Tutoring Lessons',
          photo:
            'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHRlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
          value: 'Tutoring Lessons',
        },
      ],
      error: errors.category,
    },
    tos: {
      // Group Check boxes
      value: values.tos,
      key: 'tos',
      label: 'Term and Condition',
      data: [
        { value: 'Yes', label: 'Accept' },
        { value: 'No', label: 'Decline' },
      ],
      error: errors.tos,
    },

    tos1: {
      // Group Check boxes
      value: values.tos1,
      key: 'tos1',
      label: 'Term and Condition',
      data: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
      error: errors.tos1,
    },
    tos2: {
      // Group Check boxes
      value: values.tos2,
      key: 'tos2',
      label: 'Term and Condition',
      data: [
        { value: 'Yes', label: 'Accept' },
        { value: 'No', label: 'Decline' },
      ],
      error: errors.tos2,
    },
    termCondition: {
      value: values.termCondition,
      key: 'termCondition',
      label: 'Term and Condition',
      error: errors.termCondition,
    },
  };
};

form validation
export default function validate(values: any) {
  let errors: any = {};
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (Validators.validate(emailRegex, values.email)) {
    errors.email = 'Provide right email address';
  }
  if (Validators.required(values.description)) {
    errors.description = alertMessage('Provide Description', 'Please add description', [
      { text: 'OK', onPress: () => values?.descriptionCallback && values?.descriptionCallback() },
      { text: 'Cancel', onPress: () => Alert.alert('Done') },
    ]);
  }
  if (Validators.required(values.country) || values.country?.length === 0) {
    errors.country = 'Please chose one country';
  }
  if (Validators.required(values.countries) || values.countries?.length < 0) {
    errors.countries = 'Please chose countries';
  }
  if (Validators.required(values.address)) {
    errors.address = 'Please chose at least one.';
  }
  return errors;
}
 ```

 ## Example File:
 ```
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
 ```
