# Form Validation for React Native
***
Form validation react native is a simple library to validate your form in React Native App. It is easy to use and it includes
text box, checkbox, radio button and dropdown field. It will validate all your field on the click of button.

## 1. Installation
***
  Mak sure you have @react-native-picker/picker
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

  ``` const submitFunction = async () => {
  console.log(values);
  }; // This function will take form submission by passing in useForm.
  
  const initialState = {email: 'email@gmail.com',tos: 'Yes',
  phone: '1234567890', country: 'USA', countries: [{value: 'Italy', label: 'Italy', isChecked: true}]}; // 
  const { handleSubmit, handleChange, handleBlur, values, errors } = useForm(validate, submitFunction, initialState);```
