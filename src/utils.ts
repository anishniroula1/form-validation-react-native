// function that returns a mask phone number by take a string and return a string with the mask
export function formatPhoneNumber(phone: string, countryCode: string = '+1') {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, `${countryCode}($1) $2-$3`);
}

// create a function that takes string and return a string with the mask date
export const formatDate = (value: string) => {
  let v = value.replace(/\D/g, '').slice(0, 10);
  if (v.length >= 5) {
    return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
  } else if (v.length >= 3) {
    return `${v.slice(0, 2)}/${v.slice(2)}`;
  }
  return v;
};
