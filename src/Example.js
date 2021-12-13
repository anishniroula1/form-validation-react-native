import React from "react";
import {Alert} from "react-native";
import useForm from "./useForm";
import validate, {userQuestions} from "./userQuestion";
import TextBoxQuestion from "./TextQuestion";
import DropdownQuestion from "./DropdownQuestion";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import BigTextQuestion from "./BigTextQuestion";
import RadioButtonQuestion from "./RadioButtonQuestion";
import CheckBoxQuestion from "./CheckboxQuestion";
import SelectAllQuestion from "./SelectAllQuestion";
import FormButton from "./FormButton";


const Example = () => {
    const submitFunction = async () => {
        console.log(values);
    };
    const initialState = {email: 'email@gmail.com',tos: 'Yes',
        phone: '1234567890', country: 'USA', countries: [{value: 'Italy', label: 'Italy', isChecked: true}]};
    const { handleSubmit, handleChange, handleBlur, values, errors } = useForm(validate, submitFunction, initialState);

    const handleOnButtonPress = () => {
        values.descriptionCallback = () => Alert.alert('Done')
        handleSubmit();
    }

    const question = userQuestions(values, errors);
    return (
        <KeyboardAwareScrollView extraHeight={200}>
            <TextBoxQuestion question={question.firstName} onChange={handleChange} onBlur={handleBlur}/>
            <DropdownQuestion question={question.country} onChange={handleChange} onBlur={handleBlur}/>
            <TextBoxQuestion question={question.email} onChange={handleChange} onBlur={handleBlur}/>
            <BigTextQuestion question={question.description} onChange={handleChange} onBlur={handleBlur}/>
            <CheckBoxQuestion question={question.countries} onChange={handleChange} onBlur={handleBlur}/>
            <SelectAllQuestion question={question.hello} onChange={handleChange} onBlur={handleBlur}/>
            <RadioButtonQuestion question={question.tos} onChange={handleChange} onBlur={handleBlur}/>
            <FormButton onPress={handleOnButtonPress} />
        </KeyboardAwareScrollView>
    )
}

export default Example;
