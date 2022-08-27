export const alertMessage = (title: string, message?: string, buttons?: any) => ({
  title: title,
  message: message,
  buttons: buttons,
});

export const generateRandomString = (length: number = 6) =>
  Math.random().toString(20).substr(2, length);

export const getValue = (name?: any, values?: any, defaultValue?: any) => {
  if (values[name] === '') {
    return values[name];
  }
  return values[name] ? values[name] : (values[name] = defaultValue);
};

export const unitedStateNames = [
  { code: 'AL', label: 'Alabama', value: 'Alabama' },
  { code: 'AK', label: 'Alaska', value: 'Alaska' },
  { code: 'AZ', label: 'Arizona', value: 'Arizona' },
  { code: 'AR', label: 'Arkansas', value: 'Arkansas' },
  { code: 'CA', label: 'California', value: 'California' },
  { code: 'CO', label: 'Colorado', value: 'Colorado' },
  { code: 'CT', label: 'Connecticut', value: 'Connecticut' },
  { code: 'DE', label: 'Delaware', value: 'Delaware' },
  { code: 'FL', label: 'Florida', value: 'Florida' },
  { code: 'GA', label: 'Georgia', value: 'Georgia' },
  { code: 'HI', label: 'Hawaii', value: 'Hawaii' },
  { code: 'ID', label: 'Idaho', value: 'Idaho' },
  { code: 'IL', label: 'Illinois', value: 'Illinois' },
  { code: 'IN', label: 'Indiana', value: 'Indiana' },
  { code: 'IA', label: 'Iowa', value: 'Iowa' },
  { code: 'KS', label: 'Kansas', value: 'Kansas' },
  { code: 'KY', label: 'Kentucky', value: 'Kentucky' },
  { code: 'LA', label: 'Louisiana', value: 'Louisiana' },
  { code: 'ME', label: 'Maine', value: 'Maine' },
  { code: 'MD', label: 'Maryland', value: 'Maryland' },
  { code: 'MA', label: 'Massachusetts', value: 'Massachusetts' },
  { code: 'MI', label: 'Michigan', value: 'Michigan' },
  { code: 'MN', label: 'Minnesota', value: 'Minnesota' },
  { code: 'MS', label: 'Mississippi', value: 'Mississippi' },
  { code: 'MO', label: 'Missouri', value: 'Missouri' },
  { code: 'MT', label: 'Montana', value: 'Montana' },
  { code: 'NE', label: 'Nebraska', value: 'Nebraska' },
  { code: 'NV', label: 'Nevada', value: 'Nevada' },
  { code: 'NH', label: 'New Hampshire', value: 'New Hampshire' },
  { code: 'NJ', label: 'New Jersey', value: 'New Jersey' },
  { code: 'NM', label: 'New Mexico', value: 'New Mexico' },
  { code: 'NY', label: 'New York', value: 'New York' },
  { code: 'NC', label: 'North Carolina', value: 'North Carolina' },
  { code: 'ND', label: 'North Dakota', value: 'North Dakota' },
  { code: 'OH', label: 'Ohio', value: 'Ohio' },
  { code: 'OK', label: 'Oklahoma', value: 'Oklahoma' },
  { code: 'OR', label: 'Oregon', value: 'Oregon' },
  { code: 'PA', label: 'Pennsylvania', value: 'Pennsylvania' },
  { code: 'RI', label: 'Rhode Island', value: 'Rhode Island' },
  { code: 'SC', label: 'South Carolina', value: 'South Carolina' },
  { code: 'SD', label: 'South Dakota', value: 'South Dakota' },
  { code: 'TN', label: 'Tennessee', value: 'Tennessee' },
  { code: 'TX', label: 'Texas', value: 'Texas' },
  { code: 'UT', label: 'Utah', value: 'Utah' },
  { code: 'VT', label: 'Vermont', value: 'Vermont' },
  { code: 'VA', label: 'Virginia', value: 'Virginia' },
  { code: 'WA', label: 'Washington', value: 'Washington' },
  { code: 'WV', label: 'West Virginia', value: 'West Virginia' },
  { code: 'WI', label: 'Wisconsin', value: 'Wisconsin' },
  { code: 'WY', label: 'Wyoming', value: 'Wyoming' },
];

export const getStateValueByCode = (code: string) => {
  return unitedStateNames.filter((v) => v.code === code);
};

export const countryNames = [
  {
    code: 'AF',
    code3: 'AFG',
    label: 'Afghanistan',
    value: 'Afghanistan',
    number: '004',
  },
  {
    code: 'AL',
    code3: 'ALB',
    label: 'Albania',
    value: 'Albania',
    number: '008',
  },
  {
    code: 'DZ',
    code3: 'DZA',
    label: 'Algeria',
    value: 'Algeria',
    number: '012',
  },
  {
    code: 'AS',
    code3: 'ASM',
    label: 'American Samoa',
    value: 'American Samoa',
    number: '016',
  },
  {
    code: 'AD',
    code3: 'AND',
    label: 'Andorra',
    value: 'Andorra',
    number: '020',
  },
  {
    code: 'AO',
    code3: 'AGO',
    label: 'Angola',
    value: 'Angola',
    number: '024',
  },
  {
    code: 'AI',
    code3: 'AIA',
    label: 'Anguilla',
    value: 'Anguilla',
    number: '660',
  },
  {
    code: 'AQ',
    code3: 'ATA',
    label: 'Antarctica',
    value: 'Antarctica',
    number: '010',
  },
  {
    code: 'AG',
    code3: 'ATG',
    label: 'Antigua and Barbuda',
    value: 'Antigua and Barbuda',
    number: '028',
  },
  {
    code: 'AR',
    code3: 'ARG',
    label: 'Argentina',
    value: 'Argentina',
    number: '032',
  },
  {
    code: 'AM',
    code3: 'ARM',
    label: 'Armenia',
    value: 'Armenia',
    number: '051',
  },
  {
    code: 'AW',
    code3: 'ABW',
    label: 'Aruba',
    value: 'Aruba',
    number: '533',
  },
  {
    code: 'AU',
    code3: 'AUS',
    label: 'Australia',
    value: 'Australia',
    number: '036',
  },
  {
    code: 'AT',
    code3: 'AUT',
    label: 'Austria',
    value: 'Austria',
    number: '040',
  },
  {
    code: 'AZ',
    code3: 'AZE',
    label: 'Azerbaijan',
    value: 'Azerbaijan',
    number: '031',
  },
  {
    code: 'BS',
    code3: 'BHS',
    label: 'Bahamas',
    value: 'Bahamas',
    number: '044',
  },
  {
    code: 'BH',
    code3: 'BHR',
    label: 'Bahrain',
    value: 'Bahrain',
    number: '048',
  },
  {
    code: 'BD',
    code3: 'BGD',
    label: 'Bangladesh',
    value: 'Bangladesh',
    number: '050',
  },
  {
    code: 'BB',
    code3: 'BRB',
    label: 'Barbados',
    value: 'Barbados',
    number: '052',
  },
  {
    code: 'BY',
    code3: 'BLR',
    label: 'Belarus',
    value: 'Belarus',
    number: '112',
  },
  {
    code: 'BE',
    code3: 'BEL',
    label: 'Belgium',
    value: 'Belgium',
    number: '056',
  },
  {
    code: 'BZ',
    code3: 'BLZ',
    label: 'Belize',
    value: 'Belize',
    number: '084',
  },
  {
    code: 'BJ',
    code3: 'BEN',
    label: 'Benin',
    value: 'Benin',
    number: '204',
  },
  {
    code: 'BM',
    code3: 'BMU',
    label: 'Bermuda',
    value: 'Bermuda',
    number: '060',
  },
  {
    code: 'BT',
    code3: 'BTN',
    label: 'Bhutan',
    value: 'Bhutan',
    number: '064',
  },
  {
    code: 'BO',
    code3: 'BOL',
    label: 'Bolivia (Plurinational State of)',
    value: 'Bolivia (Plurinational State of)',
    number: '068',
  },
  {
    code: 'BQ',
    code3: 'BES',
    label: 'Bonaire, Sint Eustatius and Saba',
    value: 'Bonaire, Sint Eustatius and Saba',
    number: '535',
  },
  {
    code: 'BA',
    code3: 'BIH',
    label: 'Bosnia and Herzegovina',
    value: 'Bosnia and Herzegovina',
    number: '070',
  },
  {
    code: 'BW',
    code3: 'BWA',
    label: 'Botswana',
    value: 'Botswana',
    number: '072',
  },
  {
    code: 'BV',
    code3: 'BVT',
    label: 'Bouvet Island',
    value: 'Bouvet Island',
    number: '074',
  },
  {
    code: 'BR',
    code3: 'BRA',
    label: 'Brazil',
    value: 'Brazil',
    number: '076',
  },
  {
    code: 'IO',
    code3: 'IOT',
    label: 'British Indian Ocean Territory',
    value: 'British Indian Ocean Territory',
    number: '086',
  },
  {
    code: 'BN',
    code3: 'BRN',
    label: 'Brunei Darussalam',
    value: 'Brunei Darussalam',
    number: '096',
  },
  {
    code: 'BG',
    code3: 'BGR',
    label: 'Bulgaria',
    value: 'Bulgaria',
    number: '100',
  },
  {
    code: 'BF',
    code3: 'BFA',
    label: 'Burkina Faso',
    value: 'Burkina Faso',
    number: '854',
  },
  {
    code: 'BI',
    code3: 'BDI',
    label: 'Burundi',
    value: 'Burundi',
    number: '108',
  },
  {
    code: 'CV',
    code3: 'CPV',
    label: 'Cabo Verde',
    value: 'Cabo Verde',
    number: '132',
  },
  {
    code: 'KH',
    code3: 'KHM',
    label: 'Cambodia',
    value: 'Cambodia',
    number: '116',
  },
  {
    code: 'CM',
    code3: 'CMR',
    label: 'Cameroon',
    value: 'Cameroon',
    number: '120',
  },
  {
    code: 'CA',
    code3: 'CAN',
    label: 'Canada',
    value: 'Canada',
    number: '124',
  },
  {
    code: 'KY',
    code3: 'CYM',
    label: 'Cayman Islands',
    value: 'Cayman Islands',
    number: '136',
  },
  {
    code: 'CF',
    code3: 'CAF',
    label: 'Central African Republic',
    value: 'Central African Republic',
    number: '140',
  },
  {
    code: 'TD',
    code3: 'TCD',
    label: 'Chad',
    value: 'Chad',
    number: '148',
  },
  {
    code: 'CL',
    code3: 'CHL',
    label: 'Chile',
    value: 'Chile',
    number: '152',
  },
  {
    code: 'CN',
    code3: 'CHN',
    label: 'China',
    value: 'China',
    number: '156',
  },
  {
    code: 'CX',
    code3: 'CXR',
    label: 'Christmas Island',
    value: 'Christmas Island',
    number: '162',
  },
  {
    code: 'CC',
    code3: 'CCK',
    label: 'Cocos (Keeling) Islands',
    value: 'Cocos (Keeling) Islands',
    number: '166',
  },
  {
    code: 'CO',
    code3: 'COL',
    label: 'Colombia',
    value: 'Colombia',
    number: '170',
  },
  {
    code: 'KM',
    code3: 'COM',
    label: 'Comoros',
    value: 'Comoros',
    number: '174',
  },
  {
    code: 'CD',
    code3: 'COD',
    label: 'Congo (the Democratic Republic of the)',
    value: 'Congo (the Democratic Republic of the)',
    number: '180',
  },
  {
    code: 'CG',
    code3: 'COG',
    label: 'Congo',
    value: 'Congo',
    number: '178',
  },
  {
    code: 'CK',
    code3: 'COK',
    label: 'Cook Islands',
    value: 'Cook Islands',
    number: '184',
  },
  {
    code: 'CR',
    code3: 'CRI',
    label: 'Costa Rica',
    value: 'Costa Rica',
    number: '188',
  },
  {
    code: 'HR',
    code3: 'HRV',
    label: 'Croatia',
    value: 'Croatia',
    number: '191',
  },
  {
    code: 'CU',
    code3: 'CUB',
    label: 'Cuba',
    value: 'Cuba',
    number: '192',
  },
  {
    code: 'CW',
    code3: 'CUW',
    label: 'Curaçao',
    value: 'Curaçao',
    number: '531',
  },
  {
    code: 'CY',
    code3: 'CYP',
    label: 'Cyprus',
    value: 'Cyprus',
    number: '196',
  },
  {
    code: 'CZ',
    code3: 'CZE',
    label: 'Czechia',
    value: 'Czechia',
    number: '203',
  },
  {
    code: 'CI',
    code3: 'CIV',
    label: "Côte d'Ivoire",
    value: "Côte d'Ivoire",
    number: '384',
  },
  {
    code: 'DK',
    code3: 'DNK',
    label: 'Denmark',
    value: 'Denmark',
    number: '208',
  },
  {
    code: 'DJ',
    code3: 'DJI',
    label: 'Djibouti',
    value: 'Djibouti',
    number: '262',
  },
  {
    code: 'DM',
    code3: 'DMA',
    label: 'Dominica',
    value: 'Dominica',
    number: '212',
  },
  {
    code: 'DO',
    code3: 'DOM',
    label: 'Dominican Republic',
    value: 'Dominican Republic',
    number: '214',
  },
  {
    code: 'EC',
    code3: 'ECU',
    label: 'Ecuador',
    value: 'Ecuador',
    number: '218',
  },
  {
    code: 'EG',
    code3: 'EGY',
    label: 'Egypt',
    value: 'Egypt',
    number: '818',
  },
  {
    code: 'SV',
    code3: 'SLV',
    label: 'El Salvador',
    value: 'El Salvador',
    number: '222',
  },
  {
    code: 'GQ',
    code3: 'GNQ',
    label: 'Equatorial Guinea',
    value: 'Equatorial Guinea',
    number: '226',
  },
  {
    code: 'ER',
    code3: 'ERI',
    label: 'Eritrea',
    value: 'Eritrea',
    number: '232',
  },
  {
    code: 'EE',
    code3: 'EST',
    label: 'Estonia',
    value: 'Estonia',
    number: '233',
  },
  {
    code: 'SZ',
    code3: 'SWZ',
    label: 'Eswatini',
    value: 'Eswatini',
    number: '748',
  },
  {
    code: 'ET',
    code3: 'ETH',
    label: 'Ethiopia',
    value: 'Ethiopia',
    number: '231',
  },
  {
    code: 'FK',
    code3: 'FLK',
    label: 'Falkland Islands [Malvinas]',
    value: 'Falkland Islands [Malvinas]',
    number: '238',
  },
  {
    code: 'FO',
    code3: 'FRO',
    label: 'Faroe Islands',
    value: 'Faroe Islands',
    number: '234',
  },
  {
    code: 'FJ',
    code3: 'FJI',
    label: 'Fiji',
    value: 'Fiji',
    number: '242',
  },
  {
    code: 'FI',
    code3: 'FIN',
    label: 'Finland',
    value: 'Finland',
    number: '246',
  },
  {
    code: 'FR',
    code3: 'FRA',
    label: 'France',
    value: 'France',
    number: '250',
  },
  {
    code: 'GF',
    code3: 'GUF',
    label: 'French Guiana',
    value: 'French Guiana',
    number: '254',
  },
  {
    code: 'PF',
    code3: 'PYF',
    label: 'French Polynesia',
    value: 'French Polynesia',
    number: '258',
  },
  {
    code: 'TF',
    code3: 'ATF',
    label: 'French Southern Territories',
    value: 'French Southern Territories',
    number: '260',
  },
  {
    code: 'GA',
    code3: 'GAB',
    label: 'Gabon',
    value: 'Gabon',
    number: '266',
  },
  {
    code: 'GM',
    code3: 'GMB',
    label: 'Gambia',
    value: 'Gambia',
    number: '270',
  },
  {
    code: 'GE',
    code3: 'GEO',
    label: 'Georgia',
    value: 'Georgia',
    number: '268',
  },
  {
    code: 'DE',
    code3: 'DEU',
    label: 'Germany',
    value: 'Germany',
    number: '276',
  },
  {
    code: 'GH',
    code3: 'GHA',
    label: 'Ghana',
    value: 'Ghana',
    number: '288',
  },
  {
    code: 'GI',
    code3: 'GIB',
    label: 'Gibraltar',
    value: 'Gibraltar',
    number: '292',
  },
  {
    code: 'GR',
    code3: 'GRC',
    label: 'Greece',
    value: 'Greece',
    number: '300',
  },
  {
    code: 'GL',
    code3: 'GRL',
    label: 'Greenland',
    value: 'Greenland',
    number: '304',
  },
  {
    code: 'GD',
    code3: 'GRD',
    label: 'Grenada',
    value: 'Grenada',
    number: '308',
  },
  {
    code: 'GP',
    code3: 'GLP',
    label: 'Guadeloupe',
    value: 'Guadeloupe',
    number: '312',
  },
  {
    code: 'GU',
    code3: 'GUM',
    label: 'Guam',
    value: 'Guam',
    number: '316',
  },
  {
    code: 'GT',
    code3: 'GTM',
    label: 'Guatemala',
    value: 'Guatemala',
    number: '320',
  },
  {
    code: 'GG',
    code3: 'GGY',
    label: 'Guernsey',
    value: 'Guernsey',
    number: '831',
  },
  {
    code: 'GN',
    code3: 'GIN',
    label: 'Guinea',
    value: 'Guinea',
    number: '324',
  },
  {
    code: 'GW',
    code3: 'GNB',
    label: 'Guinea-Bissau',
    value: 'Guinea-Bissau',
    number: '624',
  },
  {
    code: 'GY',
    code3: 'GUY',
    label: 'Guyana',
    value: 'Guyana',
    number: '328',
  },
  {
    code: 'HT',
    code3: 'HTI',
    label: 'Haiti',
    value: 'Haiti',
    number: '332',
  },
  {
    code: 'HM',
    code3: 'HMD',
    label: 'Heard Island and McDonald Islands',
    value: 'Heard Island and McDonald Islands',
    number: '334',
  },
  {
    code: 'VA',
    code3: 'VAT',
    label: 'Holy See',
    value: 'Holy See',
    number: '336',
  },
  {
    code: 'HN',
    code3: 'HND',
    label: 'Honduras',
    value: 'Honduras',
    number: '340',
  },
  {
    code: 'HK',
    code3: 'HKG',
    label: 'Hong Kong',
    value: 'Hong Kong',
    number: '344',
  },
  {
    code: 'HU',
    code3: 'HUN',
    label: 'Hungary',
    value: 'Hungary',
    number: '348',
  },
  {
    code: 'IS',
    code3: 'ISL',
    label: 'Iceland',
    value: 'Iceland',
    number: '352',
  },
  {
    code: 'IN',
    code3: 'IND',
    label: 'India',
    value: 'India',
    number: '356',
  },
  {
    code: 'ID',
    code3: 'IDN',
    label: 'Indonesia',
    value: 'Indonesia',
    number: '360',
  },
  {
    code: 'IR',
    code3: 'IRN',
    label: 'Iran (Islamic Republic of)',
    value: 'Iran (Islamic Republic of)',
    number: '364',
  },
  {
    code: 'IQ',
    code3: 'IRQ',
    label: 'Iraq',
    value: 'Iraq',
    number: '368',
  },
  {
    code: 'IE',
    code3: 'IRL',
    label: 'Ireland',
    value: 'Ireland',
    number: '372',
  },
  {
    code: 'IM',
    code3: 'IMN',
    label: 'Isle of Man',
    value: 'Isle of Man',
    number: '833',
  },
  {
    code: 'IL',
    code3: 'ISR',
    label: 'Israel',
    value: 'Israel',
    number: '376',
  },
  {
    code: 'IT',
    code3: 'ITA',
    label: 'Italy',
    value: 'Italy',
    number: '380',
  },
  {
    code: 'JM',
    code3: 'JAM',
    label: 'Jamaica',
    value: 'Jamaica',
    number: '388',
  },
  {
    code: 'JP',
    code3: 'JPN',
    label: 'Japan',
    value: 'Japan',
    number: '392',
  },
  {
    code: 'JE',
    code3: 'JEY',
    label: 'Jersey',
    value: 'Jersey',
    number: '832',
  },
  {
    code: 'JO',
    code3: 'JOR',
    label: 'Jordan',
    value: 'Jordan',
    number: '400',
  },
  {
    code: 'KZ',
    code3: 'KAZ',
    label: 'Kazakhstan',
    value: 'Kazakhstan',
    number: '398',
  },
  {
    code: 'KE',
    code3: 'KEN',
    label: 'Kenya',
    value: 'Kenya',
    number: '404',
  },
  {
    code: 'KI',
    code3: 'KIR',
    label: 'Kiribati',
    value: 'Kiribati',
    number: '296',
  },
  {
    code: 'KP',
    code3: 'PRK',
    label: "Korea (the Democratic People's Republic of)",
    value: "Korea (the Democratic People's Republic of)",
    number: '408',
  },
  {
    code: 'KR',
    code3: 'KOR',
    label: 'Korea (the Republic of)',
    value: 'Korea (the Republic of)',
    number: '410',
  },
  {
    code: 'KW',
    code3: 'KWT',
    label: 'Kuwait',
    value: 'Kuwait',
    number: '414',
  },
  {
    code: 'KG',
    code3: 'KGZ',
    label: 'Kyrgyzstan',
    value: 'Kyrgyzstan',
    number: '417',
  },
  {
    code: 'LA',
    code3: 'LAO',
    label: "Lao People's Democratic Republic",
    value: "Lao People's Democratic Republic",
    number: '418',
  },
  {
    code: 'LV',
    code3: 'LVA',
    label: 'Latvia',
    value: 'Latvia',
    number: '428',
  },
  {
    code: 'LB',
    code3: 'LBN',
    label: 'Lebanon',
    value: 'Lebanon',
    number: '422',
  },
  {
    code: 'LS',
    code3: 'LSO',
    label: 'Lesotho',
    value: 'Lesotho',
    number: '426',
  },
  {
    code: 'LR',
    code3: 'LBR',
    label: 'Liberia',
    value: 'Liberia',
    number: '430',
  },
  {
    code: 'LY',
    code3: 'LBY',
    label: 'Libya',
    value: 'Libya',
    number: '434',
  },
  {
    code: 'LI',
    code3: 'LIE',
    label: 'Liechtenstein',
    value: 'Liechtenstein',
    number: '438',
  },
  {
    code: 'LT',
    code3: 'LTU',
    label: 'Lithuania',
    value: 'Lithuania',
    number: '440',
  },
  {
    code: 'LU',
    code3: 'LUX',
    label: 'Luxembourg',
    value: 'Luxembourg',
    number: '442',
  },
  {
    code: 'MO',
    code3: 'MAC',
    label: 'Macao',
    value: 'Macao',
    number: '446',
  },
  {
    code: 'MG',
    code3: 'MDG',
    label: 'Madagascar',
    value: 'Madagascar',
    number: '450',
  },
  {
    code: 'MW',
    code3: 'MWI',
    label: 'Malawi',
    value: 'Malawi',
    number: '454',
  },
  {
    code: 'MY',
    code3: 'MYS',
    label: 'Malaysia',
    value: 'Malaysia',
    number: '458',
  },
  {
    code: 'MV',
    code3: 'MDV',
    label: 'Maldives',
    value: 'Maldives',
    number: '462',
  },
  {
    code: 'ML',
    code3: 'MLI',
    label: 'Mali',
    value: 'Mali',
    number: '466',
  },
  {
    code: 'MT',
    code3: 'MLT',
    label: 'Malta',
    value: 'Malta',
    number: '470',
  },
  {
    code: 'MH',
    code3: 'MHL',
    label: 'Marshall Islands',
    value: 'Marshall Islands',
    number: '584',
  },
  {
    code: 'MQ',
    code3: 'MTQ',
    label: 'Martinique',
    value: 'Martinique',
    number: '474',
  },
  {
    code: 'MR',
    code3: 'MRT',
    label: 'Mauritania',
    value: 'Mauritania',
    number: '478',
  },
  {
    code: 'MU',
    code3: 'MUS',
    label: 'Mauritius',
    value: 'Mauritius',
    number: '480',
  },
  {
    code: 'YT',
    code3: 'MYT',
    label: 'Mayotte',
    value: 'Mayotte',
    number: '175',
  },
  {
    code: 'MX',
    code3: 'MEX',
    label: 'Mexico',
    value: 'Mexico',
    number: '484',
  },
  {
    code: 'FM',
    code3: 'FSM',
    label: 'Micronesia (Federated States of)',
    value: 'Micronesia (Federated States of)',
    number: '583',
  },
  {
    code: 'MD',
    code3: 'MDA',
    label: 'Moldova (the Republic of)',
    value: 'Moldova (the Republic of)',
    number: '498',
  },
  {
    code: 'MC',
    code3: 'MCO',
    label: 'Monaco',
    value: 'Monaco',
    number: '492',
  },
  {
    code: 'MN',
    code3: 'MNG',
    label: 'Mongolia',
    value: 'Mongolia',
    number: '496',
  },
  {
    code: 'ME',
    code3: 'MNE',
    label: 'Montenegro',
    value: 'Montenegro',
    number: '499',
  },
  {
    code: 'MS',
    code3: 'MSR',
    label: 'Montserrat',
    value: 'Montserrat',
    number: '500',
  },
  {
    code: 'MA',
    code3: 'MAR',
    label: 'Morocco',
    value: 'Morocco',
    number: '504',
  },
  {
    code: 'MZ',
    code3: 'MOZ',
    label: 'Mozambique',
    value: 'Mozambique',
    number: '508',
  },
  {
    code: 'MM',
    code3: 'MMR',
    label: 'Myanmar',
    value: 'Myanmar',
    number: '104',
  },
  {
    code: 'NA',
    code3: 'NAM',
    label: 'Namibia',
    value: 'Namibia',
    number: '516',
  },
  {
    code: 'NR',
    code3: 'NRU',
    label: 'Nauru',
    value: 'Nauru',
    number: '520',
  },
  {
    code: 'NP',
    code3: 'NPL',
    label: 'Nepal',
    value: 'Nepal',
    number: '524',
  },
  {
    code: 'NL',
    code3: 'NLD',
    label: 'Netherlands',
    value: 'Netherlands',
    number: '528',
  },
  {
    code: 'NC',
    code3: 'NCL',
    label: 'New Caledonia',
    value: 'New Caledonia',
    number: '540',
  },
  {
    code: 'NZ',
    code3: 'NZL',
    label: 'New Zealand',
    value: 'New Zealand',
    number: '554',
  },
  {
    code: 'NI',
    code3: 'NIC',
    label: 'Nicaragua',
    value: 'Nicaragua',
    number: '558',
  },
  {
    code: 'NE',
    code3: 'NER',
    label: 'Niger',
    value: 'Niger',
    number: '562',
  },
  {
    code: 'NG',
    code3: 'NGA',
    label: 'Nigeria',
    value: 'Nigeria',
    number: '566',
  },
  {
    code: 'NU',
    code3: 'NIU',
    label: 'Niue',
    value: 'Niue',
    number: '570',
  },
  {
    code: 'NF',
    code3: 'NFK',
    label: 'Norfolk Island',
    value: 'Norfolk Island',
    number: '574',
  },
  {
    code: 'MP',
    code3: 'MNP',
    label: 'Northern Mariana Islands',
    value: 'Northern Mariana Islands',
    number: '580',
  },
  {
    code: 'NO',
    code3: 'NOR',
    label: 'Norway',
    value: 'Norway',
    number: '578',
  },
  {
    code: 'OM',
    code3: 'OMN',
    label: 'Oman',
    value: 'Oman',
    number: '512',
  },
  {
    code: 'PK',
    code3: 'PAK',
    label: 'Pakistan',
    value: 'Pakistan',
    number: '586',
  },
  {
    code: 'PW',
    code3: 'PLW',
    label: 'Palau',
    value: 'Palau',
    number: '585',
  },
  {
    code: 'PS',
    code3: 'PSE',
    label: 'Palestine, State of',
    value: 'Palestine, State of',
    number: '275',
  },
  {
    code: 'PA',
    code3: 'PAN',
    label: 'Panama',
    value: 'Panama',
    number: '591',
  },
  {
    code: 'PG',
    code3: 'PNG',
    label: 'Papua New Guinea',
    value: 'Papua New Guinea',
    number: '598',
  },
  {
    code: 'PY',
    code3: 'PRY',
    label: 'Paraguay',
    value: 'Paraguay',
    number: '600',
  },
  {
    code: 'PE',
    code3: 'PER',
    label: 'Peru',
    value: 'Peru',
    number: '604',
  },
  {
    code: 'PH',
    code3: 'PHL',
    label: 'Philippines',
    value: 'Philippines',
    number: '608',
  },
  {
    code: 'PN',
    code3: 'PCN',
    label: 'Pitcairn',
    value: 'Pitcairn',
    number: '612',
  },
  {
    code: 'PL',
    code3: 'POL',
    label: 'Poland',
    value: 'Poland',
    number: '616',
  },
  {
    code: 'PT',
    code3: 'PRT',
    label: 'Portugal',
    value: 'Portugal',
    number: '620',
  },
  {
    code: 'PR',
    code3: 'PRI',
    label: 'Puerto Rico',
    value: 'Puerto Rico',
    number: '630',
  },
  {
    code: 'QA',
    code3: 'QAT',
    label: 'Qatar',
    value: 'Qatar',
    number: '634',
  },
  {
    code: 'MK',
    code3: 'MKD',
    label: 'Republic of North Macedonia',
    value: 'Republic of North Macedonia',
    number: '807',
  },
  {
    code: 'RO',
    code3: 'ROU',
    label: 'Romania',
    value: 'Romania',
    number: '642',
  },
  {
    code: 'RU',
    code3: 'RUS',
    label: 'Russian Federation',
    value: 'Russian Federation',
    number: '643',
  },
  {
    code: 'RW',
    code3: 'RWA',
    label: 'Rwanda',
    value: 'Rwanda',
    number: '646',
  },
  {
    code: 'RE',
    code3: 'REU',
    label: 'Réunion',
    value: 'Réunion',
    number: '638',
  },
  {
    code: 'BL',
    code3: 'BLM',
    label: 'Saint Barthélemy',
    value: 'Saint Barthélemy',
    number: '652',
  },
  {
    code: 'SH',
    code3: 'SHN',
    label: 'Saint Helena, Ascension and Tristan da Cunha',
    value: 'Saint Helena, Ascension and Tristan da Cunha',
    number: '654',
  },
  {
    code: 'KN',
    code3: 'KNA',
    label: 'Saint Kitts and Nevis',
    value: 'Saint Kitts and Nevis',
    number: '659',
  },
  {
    code: 'LC',
    code3: 'LCA',
    label: 'Saint Lucia',
    value: 'Saint Lucia',
    number: '662',
  },
  {
    code: 'MF',
    code3: 'MAF',
    label: 'Saint Martin (French part)',
    value: 'Saint Martin (French part)',
    number: '663',
  },
  {
    code: 'PM',
    code3: 'SPM',
    label: 'Saint Pierre and Miquelon',
    value: 'Saint Pierre and Miquelon',
    number: '666',
  },
  {
    code: 'VC',
    code3: 'VCT',
    label: 'Saint Vincent and the Grenadines',
    value: 'Saint Vincent and the Grenadines',
    number: '670',
  },
  {
    code: 'WS',
    code3: 'WSM',
    label: 'Samoa',
    value: 'Samoa',
    number: '882',
  },
  {
    code: 'SM',
    code3: 'SMR',
    label: 'San Marino',
    value: 'San Marino',
    number: '674',
  },
  {
    code: 'ST',
    code3: 'STP',
    label: 'Sao Tome and Principe',
    value: 'Sao Tome and Principe',
    number: '678',
  },
  {
    code: 'SA',
    code3: 'SAU',
    label: 'Saudi Arabia',
    value: 'Saudi Arabia',
    number: '682',
  },
  {
    code: 'SN',
    code3: 'SEN',
    label: 'Senegal',
    value: 'Senegal',
    number: '686',
  },
  {
    code: 'RS',
    code3: 'SRB',
    label: 'Serbia',
    value: 'Serbia',
    number: '688',
  },
  {
    code: 'SC',
    code3: 'SYC',
    label: 'Seychelles',
    value: 'Seychelles',
    number: '690',
  },
  {
    code: 'SL',
    code3: 'SLE',
    label: 'Sierra Leone',
    value: 'Sierra Leone',
    number: '694',
  },
  {
    code: 'SG',
    code3: 'SGP',
    label: 'Singapore',
    value: 'Singapore',
    number: '702',
  },
  {
    code: 'SX',
    code3: 'SXM',
    label: 'Sint Maarten (Dutch part)',
    value: 'Sint Maarten (Dutch part)',
    number: '534',
  },
  {
    code: 'SK',
    code3: 'SVK',
    label: 'Slovakia',
    value: 'Slovakia',
    number: '703',
  },
  {
    code: 'SI',
    code3: 'SVN',
    label: 'Slovenia',
    value: 'Slovenia',
    number: '705',
  },
  {
    code: 'SB',
    code3: 'SLB',
    label: 'Solomon Islands',
    value: 'Solomon Islands',
    number: '090',
  },
  {
    code: 'SO',
    code3: 'SOM',
    label: 'Somalia',
    value: 'Somalia',
    number: '706',
  },
  {
    code: 'ZA',
    code3: 'ZAF',
    label: 'South Africa',
    value: 'South Africa',
    number: '710',
  },
  {
    code: 'GS',
    code3: 'SGS',
    label: 'South Georgia and the South Sandwich Islands',
    value: 'South Georgia and the South Sandwich Islands',
    number: '239',
  },
  {
    code: 'SS',
    code3: 'SSD',
    label: 'South Sudan',
    value: 'South Sudan',
    number: '728',
  },
  {
    code: 'ES',
    code3: 'ESP',
    label: 'Spain',
    value: 'Spain',
    number: '724',
  },
  {
    code: 'LK',
    code3: 'LKA',
    label: 'Sri Lanka',
    value: 'Sri Lanka',
    number: '144',
  },
  {
    code: 'SD',
    code3: 'SDN',
    label: 'Sudan',
    value: 'Sudan',
    number: '729',
  },
  {
    code: 'SR',
    code3: 'SUR',
    label: 'Suriname',
    value: 'Suriname',
    number: '740',
  },
  {
    code: 'SJ',
    code3: 'SJM',
    label: 'Svalbard and Jan Mayen',
    value: 'Svalbard and Jan Mayen',
    number: '744',
  },
  {
    code: 'SE',
    code3: 'SWE',
    label: 'Sweden',
    value: 'Sweden',
    number: '752',
  },
  {
    code: 'CH',
    code3: 'CHE',
    label: 'Switzerland',
    value: 'Switzerland',
    number: '756',
  },
  {
    code: 'SY',
    code3: 'SYR',
    label: 'Syrian Arab Republic',
    value: 'Syrian Arab Republic',
    number: '760',
  },
  {
    code: 'TW',
    code3: 'TWN',
    label: 'Taiwan',
    value: 'Taiwan',
    number: '158',
  },
  {
    code: 'TJ',
    code3: 'TJK',
    label: 'Tajikistan',
    value: 'Tajikistan',
    number: '762',
  },
  {
    code: 'TZ',
    code3: 'TZA',
    label: 'Tanzania, United Republic of',
    value: 'Tanzania, United Republic of',
    number: '834',
  },
  {
    code: 'TH',
    code3: 'THA',
    label: 'Thailand',
    value: 'Thailand',
    number: '764',
  },
  {
    code: 'TL',
    code3: 'TLS',
    label: 'Timor-Leste',
    value: 'Timor-Leste',
    number: '626',
  },
  {
    code: 'TG',
    code3: 'TGO',
    label: 'Togo',
    value: 'Togo',
    number: '768',
  },
  {
    code: 'TK',
    code3: 'TKL',
    label: 'Tokelau',
    value: 'Tokelau',
    number: '772',
  },
  {
    code: 'TO',
    code3: 'TON',
    label: 'Tonga',
    value: 'Tonga',
    number: '776',
  },
  {
    code: 'TT',
    code3: 'TTO',
    label: 'Trinidad and Tobago',
    value: 'Trinidad and Tobago',
    number: '780',
  },
  {
    code: 'TN',
    code3: 'TUN',
    label: 'Tunisia',
    value: 'Tunisia',
    number: '788',
  },
  {
    code: 'TR',
    code3: 'TUR',
    label: 'Turkey',
    value: 'Turkey',
    number: '792',
  },
  {
    code: 'TM',
    code3: 'TKM',
    label: 'Turkmenistan',
    value: 'Turkmenistan',
    number: '795',
  },
  {
    code: 'TC',
    code3: 'TCA',
    label: 'Turks and Caicos Islands',
    value: 'Turks and Caicos Islands',
    number: '796',
  },
  {
    code: 'TV',
    code3: 'TUV',
    label: 'Tuvalu',
    value: 'Tuvalu',
    number: '798',
  },
  {
    code: 'UG',
    code3: 'UGA',
    label: 'Uganda',
    value: 'Uganda',
    number: '800',
  },
  {
    code: 'UA',
    code3: 'UKR',
    label: 'Ukraine',
    value: 'Ukraine',
    number: '804',
  },
  {
    code: 'AE',
    code3: 'ARE',
    label: 'United Arab Emirates',
    value: 'United Arab Emirates',
    number: '784',
  },
  {
    code: 'GB',
    code3: 'GBR',
    label: 'United Kingdom of Great Britain and Northern Ireland',
    value: 'United Kingdom of Great Britain and Northern Ireland',
    number: '826',
  },
  {
    code: 'UM',
    code3: 'UMI',
    label: 'United States Minor Outlying Islands',
    value: 'United States Minor Outlying Islands',
    number: '581',
  },
  {
    code: 'US',
    code3: 'USA',
    label: 'United States of America',
    value: 'United States of America',
    number: '840',
  },
  {
    code: 'UY',
    code3: 'URY',
    label: 'Uruguay',
    value: 'Uruguay',
    number: '858',
  },
  {
    code: 'UZ',
    code3: 'UZB',
    label: 'Uzbekistan',
    value: 'Uzbekistan',
    number: '860',
  },
  {
    code: 'VU',
    code3: 'VUT',
    label: 'Vanuatu',
    value: 'Vanuatu',
    number: '548',
  },
  {
    code: 'VE',
    code3: 'VEN',
    label: 'Venezuela (Bolivarian Republic of)',
    value: 'Venezuela (Bolivarian Republic of)',
    number: '862',
  },
  {
    code: 'VN',
    code3: 'VNM',
    label: 'Viet Nam',
    value: 'Viet Nam',
    number: '704',
  },
  {
    code: 'VG',
    code3: 'VGB',
    label: 'Virgin Islands (British)',
    value: 'Virgin Islands (British)',
    number: '092',
  },
  {
    code: 'VI',
    code3: 'VIR',
    label: 'Virgin Islands (U.S.)',
    value: 'Virgin Islands (U.S.)',
    number: '850',
  },
  {
    code: 'WF',
    code3: 'WLF',
    label: 'Wallis and Futuna',
    value: 'Wallis and Futuna',
    number: '876',
  },
  {
    code: 'EH',
    code3: 'ESH',
    label: 'Western Sahara',
    value: 'Western Sahara',
    number: '732',
  },
  {
    code: 'YE',
    code3: 'YEM',
    label: 'Yemen',
    value: 'Yemen',
    number: '887',
  },
  {
    code: 'ZM',
    code3: 'ZMB',
    label: 'Zambia',
    value: 'Zambia',
    number: '894',
  },
  {
    code: 'ZW',
    code3: 'ZWE',
    label: 'Zimbabwe',
    value: 'Zimbabwe',
    number: '716',
  },
  {
    code: 'AX',
    code3: 'ALA',
    label: 'Åland Islands',
    value: 'Åland Islands',
    number: '248',
  },
];

export const getCountryNameByCode = (code: string) => {
  return countryNames.filter((val) => val.code3 === code);
};