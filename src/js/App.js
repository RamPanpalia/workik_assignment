import React, { useState, useEffect } from 'react'
import '../css/App.css'
import Input from './Components/Input'
import Axios from 'axios'

const App = () => {
  const currencies = [
    { symbol: 'AED', name: 'UAE Dirham', country: 'United Arab Emirates' },
    { symbol: 'AFN', name: 'Afghan Afghani', country: 'Afghanistan' },
    { symbol: 'ALL', name: 'Albanian Lek', country: 'Albania' },
    { symbol: 'AMD', name: 'Armenian Dram', country: 'Armenia' },
    { symbol: 'ANG', name: 'Netherlands Antillian Guilder', country: 'Netherlands Antilles' },
    { symbol: 'AOA', name: 'Angolan Kwanza', country: 'Angola' },
    { symbol: 'ARS', name: 'Argentine Peso', country: 'Argentina' },
    { symbol: 'AUD', name: 'Australian Dollar', country: 'Australia' },
    { symbol: 'AWG', name: 'Aruban Florin', country: 'Aruba' },
    { symbol: 'AZN', name: 'Azerbaijani Manat', country: 'Azerbaijan' },
    { symbol: 'BAM', name: 'Bosnia and Herzegovina Mark', country: 'Bosnia and Herzegovina' },
    { symbol: 'BBD', name: 'Barbados Dollar', country: 'Barbados' },
    { symbol: 'BDT', name: 'Bangladeshi Taka', country: 'Bangladesh' },
    { symbol: 'BGN', name: 'Bulgarian Lev', country: 'Bulgaria' },
    { symbol: 'BHD', name: 'Bahraini Dinar', country: 'Bahrain' },
    { symbol: 'BIF', name: 'Burundian Franc', country: 'Burundi' },
    { symbol: 'BMD', name: 'Bermudian Dollar', country: 'Bermuda' },
    { symbol: 'BND', name: 'Brunei Dollar', country: 'Brunei' },
    { symbol: 'BOB', name: 'Bolivian Boliviano', country: 'Bolivia' },
    { symbol: 'BRL', name: 'Brazilian Real', country: 'Brazil' },
    { symbol: 'BSD', name: 'Bahamian Dollar', country: 'Bahamas' },
    { symbol: 'BTN', name: 'Bhutanese Ngultrum', country: 'Bhutan' },
    { symbol: 'BWP', name: 'Botswana Pula', country: 'Botswana' },
    { symbol: 'BYN', name: 'Belarusian Ruble', country: 'Belarus' },
    { symbol: 'BZD', name: 'Belize Dollar', country: 'Belize' },
    { symbol: 'CAD', name: 'Canadian Dollar', country: 'Canada' },
    { symbol: 'CDF', name: 'Congolese Franc', country: 'Democratic Republic of the Congo' },
    { symbol: 'CHF', name: 'Swiss Franc', country: 'Switzerland' },
    { symbol: 'CLP', name: 'Chilean Peso', country: 'Chile' },
    { symbol: 'CNY', name: 'Chinese Renminbi', country: 'China' },
    { symbol: 'COP', name: 'Colombian Peso', country: 'Colombia' },
    { symbol: 'CRC', name: 'Costa Rican Colon', country: 'Costa Rica' },
    { symbol: 'CUP', name: 'Cuban Peso', country: 'Cuba' },
    { symbol: 'CVE', name: 'Cape Verdean Escudo', country: 'Cape Verde' },
    { symbol: 'CZK', name: 'Czech Koruna', country: 'Czech Republic' },
    { symbol: 'DJF', name: 'Djiboutian Franc', country: 'Djibouti' },
    { symbol: 'DKK', name: 'Danish Krone', country: 'Denmark' },
    { symbol: 'DOP', name: 'Dominican Peso', country: 'Dominican Republic' },
    { symbol: 'DZD', name: 'Algerian Dinar', country: 'Algeria' },
    { symbol: 'EGP', name: 'Egyptian Pound', country: 'Egypt' },
    { symbol: 'ERN', name: 'Eritrean Nakfa', country: 'Eritrea' },
    { symbol: 'ETB', name: 'Ethiopian Birr', country: 'Ethiopia' },
    { symbol: 'EUR', name: 'Euro', country: 'European Union' },
    { symbol: 'FJD', name: 'Fiji Dollar', country: 'Fiji' },
    { symbol: 'FKP', name: 'Falkland Islands Pound', country: 'Falkland Islands' },
    { symbol: 'FOK', name: 'Faroese Króna', country: 'Faroe Islands' },
    { symbol: 'GBP', name: 'Pound Sterling', country: 'United Kingdom' },
    { symbol: 'GEL', name: 'Georgian Lari', country: 'Georgia' },
    { symbol: 'GGP', name: 'Guernsey Pound', country: 'Guernsey' },
    { symbol: 'GHS', name: 'Ghanaian Cedi', country: 'Ghana' },
    { symbol: 'GIP', name: 'Gibraltar Pound', country: 'Gibraltar' },
    { symbol: 'GMD', name: 'Gambian Dalasi', country: 'The Gambia' },
    { symbol: 'GNF', name: 'Guinean Franc', country: 'Guinea' },
    { symbol: 'GTQ', name: 'Guatemalan Quetzal', country: 'Guatemala' },
    { symbol: 'GYD', name: 'Guyanese Dollar', country: 'Guyana' },
    { symbol: 'HKD', name: 'Hong Kong Dollar', country: 'Hong Kong' },
    { symbol: 'HNL', name: 'Honduran Lempira', country: 'Honduras' },
    { symbol: 'HRK', name: 'Croatian Kuna', country: 'Croatia' },
    { symbol: 'HTG', name: 'Haitian Gourde', country: 'Haiti' },
    { symbol: 'HUF', name: 'Hungarian Forint', country: 'Hungary' },
    { symbol: 'IDR', name: 'Indonesian Rupiah', country: 'Indonesia' },
    { symbol: 'ILS', name: 'Israeli New Shakel Israel' },
    { symbol: 'IMP', name: 'Manx Pound', country: 'Isle of Man' },
    { symbol: 'INR', name: 'Indian Rupee', country: 'India' },
    { symbol: 'IQD', name: 'Iraqi Dinar', country: 'Iraq' },
    { symbol: 'IRR', name: 'Iranian Rial', country: 'Iran' },
    { symbol: 'ISK', name: 'Icelandic Króna', country: 'Iceland' },
    { symbol: 'JEP', name: 'Jersey Pound', country: 'Jersey' },
    { symbol: 'JMD', name: 'Jamaican Dollar', country: 'Jamaica' },
    { symbol: 'JOD', name: 'Jordanian Dinar', country: 'Jordan' },
    { symbol: 'JPY', name: 'Japanese Yen', country: 'Japan' },
    { symbol: 'KES', name: 'Kenyan Shilling', country: 'Kenya' },
    { symbol: 'KGS', name: 'Kyrgyzstani Som', country: 'Kyrgyzstan' },
    { symbol: 'KHR', name: 'Cambodian Riel', country: 'Cambodia' },
    { symbol: 'KID', name: 'Kiribati Dollar', country: 'Kiribati' },
    { symbol: 'KMF', name: 'Comorian Franc', country: 'Comoros' },
    { symbol: 'KRW', name: 'South Korean Won', country: 'South Korea' },
    { symbol: 'KWD', name: 'Kuwaiti Dinar', country: 'Kuwait' },
    { symbol: 'KYD', name: 'Cayman Islands Dollar', country: 'Cayman Islands' },
    { symbol: 'KZT', name: 'Kazakhstani Tenge', country: 'Kazakhstan' },
    { symbol: 'LAK', name: 'Lao Kip', country: 'Laos' },
    { symbol: 'LBP', name: 'Lebanese Pound', country: 'Lebanon' },
    { symbol: 'LKR', name: 'Sri Lanka Rupee', country: 'Sri Lanka' },
    { symbol: 'LRD', name: 'Liberian Dollar', country: 'Liberia' },
    { symbol: 'LSL', name: 'Lesotho Loti', country: 'Lesotho' },
    { symbol: 'LYD', name: 'Libyan Dinar', country: 'Libya' },
    { symbol: 'MAD', name: 'Moroccan Dirham', country: 'Morocco' },
    { symbol: 'MDL', name: 'Moldovan Leu', country: 'Moldova' },
    { symbol: 'MGA', name: 'Malagasy Ariary', country: 'Madagascar' },
    { symbol: 'MKD', name: 'Macedonian Denar', country: 'North Macedonia' },
    { symbol: 'MMK', name: 'Burmese Kyat', country: 'Myanmar' },
    { symbol: 'MNT', name: 'Mongolian Tögrög', country: 'Mongolia' },
    { symbol: 'MOP', name: 'Macanese Pataca', country: 'Macau' },
    { symbol: 'MRU', name: 'Mauritanian Ouguiya', country: 'Mauritania' },
    { symbol: 'MUR', name: 'Mauritian Rupee', country: 'Mauritius' },
    { symbol: 'MVR', name: 'Maldivian Rufiyaa', country: 'Maldives' },
    { symbol: 'MWK', name: 'Malawian Kwacha', country: 'Malawi' },
    { symbol: 'MXN', name: 'Mexican Peso', country: 'Mexico' },
    { symbol: 'MYR', name: 'Malaysian Ringgit', country: 'Malaysia' },
    { symbol: 'MZN', name: 'Mozambican Metical', country: 'Mozambique' },
    { symbol: 'NAD', name: 'Namibian Dollar', country: 'Namibia' },
    { symbol: 'NGN', name: 'Nigerian Naira', country: 'Nigeria' },
    { symbol: 'NIO', name: 'Nicaraguan Córdoba', country: 'Nicaragua' },
    { symbol: 'NOK', name: 'Norwegian Krone', country: 'Norway' },
    { symbol: 'NPR', name: 'Nepalese Rupee', country: 'Nepal' },
    { symbol: 'NZD', name: 'New Zealand Dollar', country: 'New Zealand' },
    { symbol: 'OMR', name: 'Omani Rial', country: 'Oman' },
    { symbol: 'PAB', name: 'Panamanian Balboa', country: 'Panama' },
    { symbol: 'PEN', name: 'Peruvian Sol', country: 'Peru' },
    { symbol: 'PGK', name: 'Papua New Guinean Kina', country: 'Papua New Guinea' },
    { symbol: 'PHP', name: 'Philippine Peso', country: 'Philippines' },
    { symbol: 'PKR', name: 'Pakistani Rupee', country: 'Pakistan' },
    { symbol: 'PLN', name: 'Polish Złoty', country: 'Poland' },
    { symbol: 'PYG', name: 'Paraguayan Guaraní', country: 'Paraguay' },
    { symbol: 'QAR', name: 'Qatari Riyal', country: 'Qatar' },
    { symbol: 'RON', name: 'Romanian Leu', country: 'Romania' },
    { symbol: 'RSD', name: 'Serbian Dinar', country: 'Serbia' },
    { symbol: 'RUB', name: 'Russian Ruble', country: 'Russia' },
    { symbol: 'RWF', name: 'Rwandan Franc', country: 'Rwanda' },
    { symbol: 'SAR', name: 'Saudi Riyal', country: 'Saudi Arabia' },
    { symbol: 'SBD', name: 'Solomon Islands Dollar', country: 'Solomon Islands' },
    { symbol: 'SCR', name: 'Seychellois Rupee', country: 'Seychelles' },
    { symbol: 'SDG', name: 'Sudanese Pound', country: 'Sudan' },
    { symbol: 'SEK', name: 'Swedish Krona', country: 'Sweden' },
    { symbol: 'SGD', name: 'Singapore Dollar', country: 'Singapore' },
    { symbol: 'SHP', name: 'Saint Helena Pound', country: 'Saint Helena' },
    { symbol: 'SLE', name: 'Sierra Leonean Leone', country: 'Sierra Leone' },
    { symbol: 'SOS', name: 'Somali Shilling', country: 'Somalia' },
    { symbol: 'SRD', name: 'Surinamese Dollar', country: 'Suriname' },
    { symbol: 'SSP', name: 'South Sudanese Pound', country: 'South Sudan' },
    { symbol: 'STN', name: 'São Tomé and Príncipe Dobra', country: 'São Tomé and Príncipe' },
    { symbol: 'SYP', name: 'Syrian Pound', country: 'Syria' },
    { symbol: 'SZL', name: 'Eswatini Lilangeni', country: 'Eswatini' },
    { symbol: 'THB', name: 'Thai Baht', country: 'Thailand' },
    { symbol: 'TJS', name: 'Tajikistani Somoni', country: 'Tajikistan' },
    { symbol: 'TMT', name: 'Turkmenistan Manat', country: 'Turkmenistan' },
    { symbol: 'TND', name: 'Tunisian Dinar', country: 'Tunisia' },
    { symbol: 'TOP', name: 'Tongan Paʻanga', country: 'Tonga' },
    { symbol: 'TRY', name: 'Turkish Lira', country: 'Turkey' },
    { symbol: 'TTD', name: 'Trinidad and Tobago Dollar', country: 'Trinidad and Tobago' },
    { symbol: 'TVD', name: 'Tuvaluan Dollar', country: 'Tuvalu' },
    { symbol: 'TWD', name: 'New Taiwan Dollar', country: 'Taiwan' },
    { symbol: 'TZS', name: 'Tanzanian Shilling', country: 'Tanzania' },
    { symbol: 'UAH', name: 'Ukrainian Hryvnia', country: 'Ukraine' },
    { symbol: 'UGX', name: 'Ugandan Shilling', country: 'Uganda' },
    { symbol: 'USD', name: 'United States Dollar', country: 'United States' },
    { symbol: 'UYU', name: 'Uruguayan Peso', country: 'Uruguay' },
    { symbol: 'UZS', name: 'Uzbekistani So\'m', country: 'Uzbekistan' },
    { symbol: 'VES', name: 'Venezuelan Bolívar Soberano', country: 'Venezuela' },
    { symbol: 'VND', name: 'Vietnamese Đồng', country: 'Vietnam' },
    { symbol: 'VUV', name: 'Vanuatu Vatu', country: 'Vanuatu' },
    { symbol: 'WST', name: 'Samoan Tālā', country: 'Samoa' },
    { symbol: 'XAF', name: 'Central African CFA Franc', country: 'CEMAC' },
    { symbol: 'XCD', name: 'East Caribbean Dollar', country: 'Organisation of Eastern Caribbean States' },
    { symbol: 'XDR', name: 'Special Drawing Rights', country: 'International Monetary Fund' },
    { symbol: 'XOF', name: 'West African CFA franc', country: 'CFA' },
    { symbol: 'XPF', name: 'CFP Franc', country: 'Collectivités d\'Outre-Mer' },
    { symbol: 'YER', name: 'Yemeni Rial', country: 'Yemen' },
    { symbol: 'ZAR', name: 'South African Rand', country: 'South Africa' },
    { symbol: 'ZMW', name: 'Zambian Kwacha', country: 'Zambia' },
    { symbol: 'ZWL', name: 'Zimbabwean Dollar', country: 'Zimbabwe' }
  ]


  const [data, setData] = useState({
    from: 'INR',
    to: [{
      symbol: 'INR',
      value: '1'
    }],
    amount: ''
  })
  const [rates, setRates] = useState({})
  const [factor, setFactor] = useState(1)

  useEffect(() => {
    Axios.get(`https://v6.exchangerate-api.com/v6/612e1287f23208752bc1e9e5/latest/${data.from}`)
      .then(res => {
        setRates(res.data.conversion_rates)
      })
      .catch(err => console.log(err))
  }, [data.from])

  return (
    <div className='main-box'>
      <Input
        label='From'
        value={data.from}
        factor={factor}
        setFactor={setFactor}
        onChange={e => setData({ ...data, from: e.target.value })}
        showClose={false}
        currencies={currencies}
        disabled={false}
      />
      <div className='to-box'>
        {data.to.map((item, index) => (
          <Input
            key={index}
            label='To'
            value={item.symbol}
            index={index}
            onChange={e => {
              let newTo = [...data.to]
              newTo[index].symbol = e.target.value
              setData({ ...data, to: newTo })
            }}
            data={data}
            setData={setData}
            to={data.to}
            showClose={true}
            currencies={currencies}
            rates={rates}
            disabled={true}
            factor={factor}
          />
        ))}
        <div className='add-btn' onClick={() => {
          let newTo = [...data.to]
          newTo.push({
            symbol: 'INR',
            value: ''
          })
          setData({ ...data, to: newTo })
        }}>+</div>
      </div>
    </div>
  )
}

export default App