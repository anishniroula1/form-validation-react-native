import {Validators} from "./Validators";
import {Alert} from "react-native";
import {alertMessage} from "./AlertMessage";

export const userQuestions = (values, errors) => {
    return {
        firstName: {
            value: values.firstName,
            key: 'firstName',
            label: 'First Name',
            error: errors.firstName,
        },
        lastName: {
            value: values.lastName,
            key: 'lastName',
            label: 'Last Name',
            error: errors.lastName,
        },
        description: {
            value: values.description,
            key: 'description',
            label: 'Description',
            error: errors.description,
            multiline: true,
            numberOfLines: 2,
        },
        email: { // text box
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
            error: errors.password
        },
        phone: {
            value: values.phone,
            key: 'phone',
            label: 'Phone Number',
            type: 'tel',
            maxLength: 10,
            minLength: 2,
            keyboardType: 'numeric',
            error: errors.phone
        },
        date: {
            value: values.date,
            key: 'date',
            label: 'Today Date',
            type: 'date',
            error: errors.date
        },
        accept: { // single check box return true or false
            value: values.accept,
            key: 'accept',
            label: 'Accept Term and Condition',
            error: errors.accept
        },
        countries: { // single choice dropdown
            value: values.countries,
            key: 'countries',
            label: 'Choose From List of Countries',
            data: [
                {value: 'India', label: 'India', isChecked: true},
                {value: 'USA', label: 'USA'},
                {value: 'Brazil', label: 'Brazil'},
                {value: 'Germany', label: 'Germany'},
            ],
            error: errors.countries
        },
        country: { // Radio Button for single choices
            value: values.country,
            key: 'country',
            label: 'Choose a country',
            data: [
                {value: 'India', label: 'India'},
                {value: 'USA', label: 'USA'},
                {value: 'UK', label: 'UK'},
                {value: 'Germany', label: 'Germany'},
                {value: 'Russia', label: 'Russia'},
                {value: 'Italy', label: 'Italy'},
            ],
            error: errors.country
        },
        sport: { // Group Check boxes
            value: values.sport,
            key: 'sport',
            label: 'Select your favorite Sport(s)?',
            data: [
                {value: 'Soccer', label: 'Soccer'},
                {value: 'Cricket', label: 'Cricket'},
            ],
            error: errors.sport
        },
        hello: { // Group Check boxes
            value: values.hello,
            key: 'hello',
            label: 'What are your favorite hobbies?',
            data: [
                {value: 'Hiking', label: 'Hiking', isChecked:true},
                {value: 'Traveling', label: 'Traveling', isChecked:true},
                {value: 'Coding', label: 'Coding', isChecked:true},
            ],
            error: errors.hello
        },
        tos: { // Group Check boxes
            value: values.tos,
            key: 'tos',
            label: 'Term and Condition',
            data: [
                {value: 'Yes', label: 'Accept'},
                {value: 'No', label: 'Decline'},
            ],
            error: errors.tos
        }
    }
};

export default function validate(values) {
    let errors = {};
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (Validators.validate(emailRegex,values.email)) {
        errors.email = "Provide right email address";
    }
    if (Validators.required(values.description)) {
        errors.description = alertMessage('Provide Description', 'Please add description', [
            { text: 'OK', onPress: () => values?.descriptionCallback && values?.descriptionCallback()},
            { text: 'Cancel', onPress: () => Alert.alert('Done')}])
    }
    if (Validators.required(values.country) || values.country?.length === 0) {
        errors.country = "Please chose one country";
    }
    if (Validators.required(values.countries) || values.countries?.length < 0) {
        errors.countries = "Please chose countries";
    }
    if (Validators.required(values.hello) || values.hello?.length < 0) {
        errors.hello = "Please chose at least one.";
    }
    return errors;
};
