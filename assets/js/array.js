const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", 
  "Antigua and Barbuda", "Argentina", "Armenia", "Australia", 
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", 
  "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", 
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", 
  "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", 
  "Cambodia", "Cameroon", "Canada", "Central African Republic", 
  "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", 
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
  "East Timor", "Ecuador", "Egypt", "El Salvador", 
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
  "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", 
  "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", 
  "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", 
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", 
  "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", 
  "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", 
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", 
  "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
  "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
  "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", 
  "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", 
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", 
  "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", 
  "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", 
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", 
  "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
  "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
  "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
  "Solomon Islands", "Somalia", "South Africa", "South Sudan", 
  "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", 
  "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", 
  "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", 
  "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", 
  "Ukraine", "United Arab Emirates", "United Kingdom", "United States", 
  "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", 
  "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const nationalities = [
  "Afghan", "Albanian", "Algerian", "Andorran", "Angolan", 
  "Antiguan and Barbudan", "Argentine", "Armenian", "Australian", 
  "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", 
  "Barbadian", "Belarusian", "Belgian", "Belizean", "Beninese", 
  "Bhutanese", "Bolivian", "Bosnian and Herzegovinian", "Botswanan", 
  "Brazilian", "Bruneian", "Bulgarian", "Burkinabe", "Burundian", 
  "Cabo Verdean", "Cambodian", "Cameroonian", "Canadian", 
  "Central African", "Chadian", "Chilean", "Chinese", "Colombian", 
  "Comoran", "Congolese", "Costa Rican", "Croatian", "Cuban", 
  "Cypriot", "Czech", "Danish", "Djiboutian", "Dominican", 
  "East Timorese", "Ecuadorian", "Egyptian", "Salvadoran", 
  "Equatorial Guinean", "Eritrean", "Estonian", "Eswatini", 
  "Ethiopian", "Fijian", "Finnish", "French", "Gabonese", 
  "Gambian", "Georgian", "German", "Ghanaian", "Greek", 
  "Grenadian", "Guatemalan", "Guinean", "Guinea-Bissauan", 
  "Guyanese", "Haitian", "Honduran", "Hungarian", "Icelandic", 
  "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", 
  "Israeli", "Italian", "Jamaican", "Japanese", "Jordanian", 
  "Kazakhstani", "Kenyan", "I-Kiribati", "North Korean", 
  "South Korean", "Kosovar", "Kuwaiti", "Kyrgyzstani", "Lao", 
  "Latvian", "Lebanese", "Basotho", "Liberian", "Libyan", 
  "Liechtensteiner", "Lithuanian", "Luxembourgish", "Malagasy", 
  "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese", 
  "Marshallese", "Mauritanian", "Mauritian", "Mexican", 
  "Micronesian", "Moldovan", "Monacan", "Mongolian", "Montenegrin", 
  "Moroccan", "Mozambican", "Burmese", "Namibian", "Nauruan", 
  "Nepali", "Dutch", "New Zealander", "Nicaraguan", "Nigerien", 
  "Nigerian", "North Macedonian", "Norwegian", "Omani", 
  "Pakistani", "Palauan", "Palestinian", "Panamanian", 
  "Papua New Guinean", "Paraguayan", "Peruvian", "Filipino", 
  "Polish", "Portuguese", "Qatari", "Romanian", "Russian", 
  "Rwandan", "Kittitian and Nevisian", "Saint Lucian", 
  "Vincentian", "Samoan", "San Marinese", "Sao Tomean", 
  "Saudi", "Senegalese", "Serbian", "Seychellois", 
  "Sierra Leonean", "Singaporean", "Slovak", "Slovenian", 
  "Solomon Islander", "Somali", "South African", "South Sudanese", 
  "Spanish", "Sri Lankan", "Sudanese", "Surinamese", "Swedish", 
  "Swiss", "Syrian", "Taiwanese", "Tajikistani", "Tanzanian", 
  "Thai", "Timorese", "Togolese", "Tongan", "Trinidadian or Tobagonian", 
  "Tunisian", "Turkish", "Turkmen", "Tuvaluan", "Ugandan", 
  "Ukrainian", "Emirati", "British", "American", "Uruguayan", 
  "Uzbekistani", "Vanuatuan", "Vatican", "Venezuelan", 
  "Vietnamese", "Yemeni", "Zambian", "Zimbabwean"
];

const visaTypes = [
  "Tourist Visa","Business Visa","Student Visa","Transit Visa",
  "Work Visa","Immigrant Visa","Family Reunion Visa",
  "Diplomatic Visa","Medical Visa","Working Holiday Visa"
];