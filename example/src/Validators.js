const regex = {
    email: new RegExp(
        '^(([^<>()\\[\\]\\\\.,;:\\s@]+(\\.[^<>()\\[\\]\\\\.,;:\\s@]+)*)|(.+))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
    ),
    number: new RegExp('^[0-9]+$'),
    strongPassword: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"),
    mediumPassword: new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"),
    phone: new RegExp(/^((\+1)|1)? ?\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})( ?(ext\.? ?|x)(\d*))?$/)

};

export class Validators {
    static validate(regexPattern, value, message) {
        if (value) {
            const result = new RegExp(regexPattern).test(value);
            if (!result) return { error: true, message };
        }
    }

    static email(value, message) {
        if (value) {
            const result = regex.email.test(value);
            if (!result) return { error: true, message };
        }
    }

    static phone(value, message) {
        if (value) {
            const result = regex.phone.test(value);
            if (!result) return { error: true, message };
        }
    }

    static password(value, message) {
        if (value) {
            const result = regex.mediumPassword.test(value);
            if (!result) return { error: true, message };
        }
        return false;
    }

    static required(value, message) {
        if (!value || !value.toString().trim().length) {
            return { error: true, message };
        }
        return false;
    }

    static number(value, message) {
        const length = value ? value.toString().length : 0;

        if (length > 0) {
            const result = regex.number.test(value);
            if (!result) {
                return { error: true, message };
            }
        }

        return false;
    }
}

export const validateInput = (validators, value) => {
    if (validators && validators.length) {
        for (let i = 0; i < validators.length; i++) {
            const error = validators[i].check(value, validators[i].message);
            if (error) {
                return error;
            }
        }
    }
    return false;
};
