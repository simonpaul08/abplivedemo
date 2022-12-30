// select countries 
const wrapperCountries = document.querySelector(".wrapper-countries"),
    selectBtnCountries = wrapperCountries.querySelector(".select-btn-countries"),
    searchInpCountries = wrapperCountries.querySelector(".input-countries"),
    optionsCountries = wrapperCountries.querySelector(".options-countries"),
    downArrowCountries = document.querySelector('.down-arrow-countries'),
    crossArrowcCountries = document.querySelector('.cross-arrow-countries'),
    contentCountries = document.querySelector('.content-countries')

let countries = [
    { "countryCode": "AD", "countryName": "Andorra", "Image Name": "Andorra-AD www.livepincode.com" },
    { "countryCode": "AE", "countryName": "United Arab Emirates", "Image Name": "United Arab Emirates-AE www.livepincode.com" },
    { "countryCode": "AF", "countryName": "Afghanistan", "Image Name": "Afghanistan-AF www.livepincode.com" },
    { "countryCode": "AG", "countryName": "Antigua and Barbuda", "Image Name": "Antigua and Barbuda-AG www.livepincode.com" },
    { "countryCode": "AI", "countryName": "Anguilla", "Image Name": "Anguilla-AI www.livepincode.com" },
    { "countryCode": "AL", "countryName": "Albania", "Image Name": "Albania-AL www.livepincode.com" },
    { "countryCode": "AM", "countryName": "Armenia", "Image Name": "Armenia-AM www.livepincode.com" },
    { "countryCode": "AO", "countryName": "Angola", "Image Name": "Angola-AO www.livepincode.com" },
    { "countryCode": "AQ", "countryName": "Antarctica", "Image Name": "Antarctica-AQ www.livepincode.com" },
    { "countryCode": "AR", "countryName": "Argentina", "Image Name": "Argentina-AR www.livepincode.com" },
    { "countryCode": "AS", "countryName": "American Samoa", "Image Name": "American Samoa-AS www.livepincode.com" },
    { "countryCode": "AT", "countryName": "Austria", "Image Name": "Austria-AT www.livepincode.com" },
    { "countryCode": "AU", "countryName": "Australia", "Image Name": "Australia-AU www.livepincode.com" },
    { "countryCode": "AW", "countryName": "Aruba", "Image Name": "Aruba-AW www.livepincode.com" },
    { "countryCode": "AX", "countryName": "Åland", "Image Name": "Åland-AX www.livepincode.com" },
    { "countryCode": "AZ", "countryName": "Azerbaijan", "Image Name": "Azerbaijan-AZ www.livepincode.com" },
    { "countryCode": "BA", "countryName": "Bosnia and Herzegovina", "Image Name": "Bosnia and Herzegovina-BA www.livepincode.com" },
    { "countryCode": "BB", "countryName": "Barbados", "Image Name": "Barbados-BB www.livepincode.com" },
    { "countryCode": "BD", "countryName": "Bangladesh", "Image Name": "Bangladesh-BD www.livepincode.com" },
    { "countryCode": "BE", "countryName": "Belgium", "Image Name": "Belgium-BE www.livepincode.com" },
    { "countryCode": "BF", "countryName": "Burkina Faso", "Image Name": "Burkina Faso-BF www.livepincode.com" },
    { "countryCode": "BG", "countryName": "Bulgaria", "Image Name": "Bulgaria-BG www.livepincode.com" },
    { "countryCode": "BH", "countryName": "Bahrain", "Image Name": "Bahrain-BH www.livepincode.com" },
    { "countryCode": "BI", "countryName": "Burundi", "Image Name": "Burundi-BI www.livepincode.com" },
    { "countryCode": "BJ", "countryName": "Benin", "Image Name": "Benin-BJ www.livepincode.com" },
    { "countryCode": "BL", "countryName": "Saint Barthélemy", "Image Name": "Saint Barthélemy-BL www.livepincode.com" },
    { "countryCode": "BM", "countryName": "Bermuda", "Image Name": "Bermuda-BM www.livepincode.com" },
    { "countryCode": "BN", "countryName": "Brunei", "Image Name": "Brunei-BN www.livepincode.com" },
    { "countryCode": "BO", "countryName": "Bolivia", "Image Name": "Bolivia-BO www.livepincode.com" },
    { "countryCode": "BQ", "countryName": "Bonaire, Sint Eustatius", "Image Name": "Bonaire, Sint Eustatius, and Saba-BQ www.livepincode.com" },
    { "countryCode": "BR", "countryName": "Brazil", "Image Name": "Brazil-BR www.livepincode.com" },
    { "countryCode": "BS", "countryName": "Bahamas", "Image Name": "Bahamas-BS www.livepincode.com" },
    { "countryCode": "BT", "countryName": "Bhutan", "Image Name": "Bhutan-BT www.livepincode.com" },
    { "countryCode": "BV", "countryName": "Bouvet Island", "Image Name": "Bouvet Island-BV www.livepincode.com" },
    { "countryCode": "BW", "countryName": "Botswana", "Image Name": "Botswana-BW www.livepincode.com" },
    { "countryCode": "BY", "countryName": "Belarus", "Image Name": "Belarus-BY www.livepincode.com" },
    { "countryCode": "BZ", "countryName": "Belize", "Image Name": "Belize-BZ www.livepincode.com" },
    { "countryCode": "CA", "countryName": "Canada", "Image Name": "Canada-CA www.livepincode.com" },
    { "countryCode": "CC", "countryName": "Cocos (Keeling) Islands", "Image Name": "Cocos (Keeling) Islands-CC www.livepincode.com" },
    { "countryCode": "CD", "countryName": "DR Congo", "Image Name": "DR Congo-CD www.livepincode.com" },
    { "countryCode": "CF", "countryName": "Central African Republic", "Image Name": "Central African Republic-CF www.livepincode.com" },
    { "countryCode": "CG", "countryName": "Congo Republic", "Image Name": "Congo Republic-CG www.livepincode.com" },
    { "countryCode": "CH", "countryName": "Switzerland", "Image Name": "Switzerland-CH www.livepincode.com" },
    { "countryCode": "CI", "countryName": "Ivory Coast", "Image Name": "Ivory Coast-CI www.livepincode.com" },
    { "countryCode": "CK", "countryName": "Cook Islands", "Image Name": "Cook Islands-CK www.livepincode.com" },
    { "countryCode": "CL", "countryName": "Chile", "Image Name": "Chile-CL www.livepincode.com" },
    { "countryCode": "CM", "countryName": "Cameroon", "Image Name": "Cameroon-CM www.livepincode.com" },
    { "countryCode": "CN", "countryName": "China", "Image Name": "China-CN www.livepincode.com" },
    { "countryCode": "CO", "countryName": "Colombia", "Image Name": "Colombia-CO www.livepincode.com" },
    { "countryCode": "CR", "countryName": "Costa Rica", "Image Name": "Costa Rica-CR www.livepincode.com" },
    { "countryCode": "CU", "countryName": "Cuba", "Image Name": "Cuba-CU www.livepincode.com" },
    { "countryCode": "CV", "countryName": "Cabo Verde", "Image Name": "Cabo Verde-CV www.livepincode.com" },
    { "countryCode": "CW", "countryName": "Curaçao", "Image Name": "Curaçao-CW www.livepincode.com" },
    { "countryCode": "CX", "countryName": "Christmas Island", "Image Name": "Christmas Island-CX www.livepincode.com" },
    { "countryCode": "CY", "countryName": "Cyprus", "Image Name": "Cyprus-CY www.livepincode.com" },
    { "countryCode": "CZ", "countryName": "Czechia", "Image Name": "Czechia-CZ www.livepincode.com" },
    { "countryCode": "DE", "countryName": "Germany", "Image Name": "Germany-DE www.livepincode.com" },
    { "countryCode": "DJ", "countryName": "Djibouti", "Image Name": "Djibouti-DJ www.livepincode.com" },
    { "countryCode": "DK", "countryName": "Denmark", "Image Name": "Denmark-DK www.livepincode.com" },
    { "countryCode": "DM", "countryName": "Dominica", "Image Name": "Dominica-DM www.livepincode.com" },
    { "countryCode": "DO", "countryName": "Dominican Republic", "Image Name": "Dominican Republic-DO www.livepincode.com" },
    { "countryCode": "DZ", "countryName": "Algeria", "Image Name": "Algeria-DZ www.livepincode.com" },
    { "countryCode": "EC", "countryName": "Ecuador", "Image Name": "Ecuador-EC www.livepincode.com" },
    { "countryCode": "EE", "countryName": "Estonia", "Image Name": "Estonia-EE www.livepincode.com" },
    { "countryCode": "EG", "countryName": "Egypt", "Image Name": "Egypt-EG www.livepincode.com" },
    { "countryCode": "EH", "countryName": "Western Sahara", "Image Name": "Western Sahara-EH www.livepincode.com" },
    { "countryCode": "ER", "countryName": "Eritrea", "Image Name": "Eritrea-ER www.livepincode.com" },
    { "countryCode": "ES", "countryName": "Spain", "Image Name": "Spain-ES www.livepincode.com" },
    { "countryCode": "ET", "countryName": "Ethiopia", "Image Name": "Ethiopia-ET www.livepincode.com" },
    { "countryCode": "FI", "countryName": "Finland", "Image Name": "Finland-FI www.livepincode.com" },
    { "countryCode": "FJ", "countryName": "Fiji", "Image Name": "Fiji-FJ www.livepincode.com" },
    { "countryCode": "FK", "countryName": "Falkland Islands", "Image Name": "Falkland Islands-FK www.livepincode.com" },
    { "countryCode": "FM", "countryName": "Micronesia", "Image Name": "Micronesia-FM www.livepincode.com" },
    { "countryCode": "FO", "countryName": "Faroe Islands", "Image Name": "Faroe Islands-FO www.livepincode.com" },
    { "countryCode": "FR", "countryName": "France", "Image Name": "France-FR www.livepincode.com" },
    { "countryCode": "GA", "countryName": "Gabon", "Image Name": "Gabon-GA www.livepincode.com" },
    { "countryCode": "GB", "countryName": "United Kingdom", "Image Name": "United Kingdom-GB www.livepincode.com" },
    { "countryCode": "GD", "countryName": "Grenada", "Image Name": "Grenada-GD www.livepincode.com" },
    { "countryCode": "GE", "countryName": "Georgia", "Image Name": "Georgia-GE www.livepincode.com" },
    { "countryCode": "GF", "countryName": "French Guiana", "Image Name": "French Guiana-GF www.livepincode.com" },
    { "countryCode": "GG", "countryName": "Guernsey", "Image Name": "Guernsey-GG www.livepincode.com" },
    { "countryCode": "GH", "countryName": "Ghana", "Image Name": "Ghana-GH www.livepincode.com" },
    { "countryCode": "GI", "countryName": "Gibraltar", "Image Name": "Gibraltar-GI www.livepincode.com" },
    { "countryCode": "GL", "countryName": "Greenland", "Image Name": "Greenland-GL www.livepincode.com" },
    { "countryCode": "GM", "countryName": "The Gambia", "Image Name": "The Gambia-GM www.livepincode.com" },
    { "countryCode": "GN", "countryName": "Guinea", "Image Name": "Guinea-GN www.livepincode.com" },
    { "countryCode": "GP", "countryName": "Guadeloupe", "Image Name": "Guadeloupe-GP www.livepincode.com" },
    { "countryCode": "GQ", "countryName": "Equatorial Guinea", "Image Name": "Equatorial Guinea-GQ www.livepincode.com" },
    { "countryCode": "GR", "countryName": "Greece", "Image Name": "Greece-GR www.livepincode.com" },
    { "countryCode": "GS", "countryName": "South Georgia", "Image Name": "South Georgia and South Sandwich Islands-GS www.livepincode.com" },
    { "countryCode": "GT", "countryName": "Guatemala", "Image Name": "Guatemala-GT www.livepincode.com" },
    { "countryCode": "GU", "countryName": "Guam", "Image Name": "Guam-GU www.livepincode.com" },
    { "countryCode": "GW", "countryName": "Guinea-Bissau", "Image Name": "Guinea-Bissau-GW www.livepincode.com" },
    { "countryCode": "GY", "countryName": "Guyana", "Image Name": "Guyana-GY www.livepincode.com" },
    { "countryCode": "HK", "countryName": "Hong Kong", "Image Name": "Hong Kong-HK www.livepincode.com" },
    { "countryCode": "HM", "countryName": "Heard and McDonald", "Image Name": "Heard and McDonald Islands-HM www.livepincode.com" },
    { "countryCode": "HN", "countryName": "Honduras", "Image Name": "Honduras-HN www.livepincode.com" },
    { "countryCode": "HR", "countryName": "Croatia", "Image Name": "Croatia-HR www.livepincode.com" },
    { "countryCode": "HT", "countryName": "Haiti", "Image Name": "Haiti-HT www.livepincode.com" },
    { "countryCode": "HU", "countryName": "Hungary", "Image Name": "Hungary-HU www.livepincode.com" },
    { "countryCode": "ID", "countryName": "Indonesia", "Image Name": "Indonesia-ID www.livepincode.com" },
    { "countryCode": "IE", "countryName": "Ireland", "Image Name": "Ireland-IE www.livepincode.com" },
    { "countryCode": "IL", "countryName": "Israel", "Image Name": "Israel-IL www.livepincode.com" },
    { "countryCode": "IM", "countryName": "Isle of Man", "Image Name": "Isle of Man-IM www.livepincode.com" },
    { "countryCode": "IN", "countryName": "India", "Image Name": "India-IN www.livepincode.com" },
    { "countryCode": "IO", "countryName": "British Indian Ocean", "Image Name": "British Indian Ocean Territory-IO www.livepincode.com" },
    { "countryCode": "IQ", "countryName": "Iraq", "Image Name": "Iraq-IQ www.livepincode.com" },
    { "countryCode": "IR", "countryName": "Iran", "Image Name": "Iran-IR www.livepincode.com" },
    { "countryCode": "IS", "countryName": "Iceland", "Image Name": "Iceland-IS www.livepincode.com" },
    { "countryCode": "IT", "countryName": "Italy", "Image Name": "Italy-IT www.livepincode.com" },
    { "countryCode": "JE", "countryName": "Jersey", "Image Name": "Jersey-JE www.livepincode.com" },
    { "countryCode": "JM", "countryName": "Jamaica", "Image Name": "Jamaica-JM www.livepincode.com" },
    { "countryCode": "JO", "countryName": "Jordan", "Image Name": "Jordan-JO www.livepincode.com" },
    { "countryCode": "JP", "countryName": "Japan", "Image Name": "Japan-JP www.livepincode.com" },
    { "countryCode": "KE", "countryName": "Kenya", "Image Name": "Kenya-KE www.livepincode.com" },
    { "countryCode": "KG", "countryName": "Kyrgyzstan", "Image Name": "Kyrgyzstan-KG www.livepincode.com" },
    { "countryCode": "KH", "countryName": "Cambodia", "Image Name": "Cambodia-KH www.livepincode.com" },
    { "countryCode": "KI", "countryName": "Kiribati", "Image Name": "Kiribati-KI www.livepincode.com" },
    { "countryCode": "KM", "countryName": "Comoros", "Image Name": "Comoros-KM www.livepincode.com" },
    { "countryCode": "KN", "countryName": "St Kitts and Nevis", "Image Name": "St Kitts and Nevis-KN www.livepincode.com" },
    { "countryCode": "KP", "countryName": "North Korea", "Image Name": "North Korea-KP www.livepincode.com" },
    { "countryCode": "KR", "countryName": "South Korea", "Image Name": "South Korea-KR www.livepincode.com" },
    { "countryCode": "KW", "countryName": "Kuwait", "Image Name": "Kuwait-KW www.livepincode.com" },
    { "countryCode": "KY", "countryName": "Cayman Islands", "Image Name": "Cayman Islands-KY www.livepincode.com" },
    { "countryCode": "KZ", "countryName": "Kazakhstan", "Image Name": "Kazakhstan-KZ www.livepincode.com" },
    { "countryCode": "LA", "countryName": "Laos", "Image Name": "Laos-LA www.livepincode.com" },
    { "countryCode": "LB", "countryName": "Lebanon", "Image Name": "Lebanon-LB www.livepincode.com" },
    { "countryCode": "LC", "countryName": "Saint Lucia", "Image Name": "Saint Lucia-LC www.livepincode.com" },
    { "countryCode": "LI", "countryName": "Liechtenstein", "Image Name": "Liechtenstein-LI www.livepincode.com" },
    { "countryCode": "LK", "countryName": "Sri Lanka", "Image Name": "Sri Lanka-LK www.livepincode.com" },
    { "countryCode": "LR", "countryName": "Liberia", "Image Name": "Liberia-LR www.livepincode.com" },
    { "countryCode": "LS", "countryName": "Lesotho", "Image Name": "Lesotho-LS www.livepincode.com" },
    { "countryCode": "LT", "countryName": "Lithuania", "Image Name": "Lithuania-LT www.livepincode.com" },
    { "countryCode": "LU", "countryName": "Luxembourg", "Image Name": "Luxembourg-LU www.livepincode.com" },
    { "countryCode": "LV", "countryName": "Latvia", "Image Name": "Latvia-LV www.livepincode.com" },
    { "countryCode": "LY", "countryName": "Libya", "Image Name": "Libya-LY www.livepincode.com" },
    { "countryCode": "MA", "countryName": "Morocco", "Image Name": "Morocco-MA www.livepincode.com" },
    { "countryCode": "MC", "countryName": "Monaco", "Image Name": "Monaco-MC www.livepincode.com" },
    { "countryCode": "MD", "countryName": "Moldova", "Image Name": "Moldova-MD www.livepincode.com" },
    { "countryCode": "ME", "countryName": "Montenegro", "Image Name": "Montenegro-ME www.livepincode.com" },
    { "countryCode": "MF", "countryName": "Saint Martin", "Image Name": "Saint Martin-MF www.livepincode.com" },
    { "countryCode": "MG", "countryName": "Madagascar", "Image Name": "Madagascar-MG www.livepincode.com" },
    { "countryCode": "MH", "countryName": "Marshall Islands", "Image Name": "Marshall Islands-MH www.livepincode.com" },
    { "countryCode": "MK", "countryName": "North Macedonia", "Image Name": "North Macedonia-MK www.livepincode.com" },
    { "countryCode": "ML", "countryName": "Mali", "Image Name": "Mali-ML www.livepincode.com" },
    { "countryCode": "MM", "countryName": "Myanmar", "Image Name": "Myanmar-MM www.livepincode.com" },
    { "countryCode": "MN", "countryName": "Mongolia", "Image Name": "Mongolia-MN www.livepincode.com" },
    { "countryCode": "MO", "countryName": "Macao", "Image Name": "Macao-MO www.livepincode.com" },
    { "countryCode": "MP", "countryName": "Northern Mariana", "Image Name": "Northern Mariana Islands-MP www.livepincode.com" },
    { "countryCode": "MQ", "countryName": "Martinique", "Image Name": "Martinique-MQ www.livepincode.com" },
    { "countryCode": "MR", "countryName": "Mauritania", "Image Name": "Mauritania-MR www.livepincode.com" },
    { "countryCode": "MS", "countryName": "Montserrat", "Image Name": "Montserrat-MS www.livepincode.com" },
    { "countryCode": "MT", "countryName": "Malta", "Image Name": "Malta-MT www.livepincode.com" },
    { "countryCode": "MU", "countryName": "Mauritius", "Image Name": "Mauritius-MU www.livepincode.com" },
    { "countryCode": "MV", "countryName": "Maldives", "Image Name": "Maldives-MV www.livepincode.com" },
    { "countryCode": "MW", "countryName": "Malawi", "Image Name": "Malawi-MW www.livepincode.com" },
    { "countryCode": "MX", "countryName": "Mexico", "Image Name": "Mexico-MX www.livepincode.com" },
    { "countryCode": "MY", "countryName": "Malaysia", "Image Name": "Malaysia-MY www.livepincode.com" },
    { "countryCode": "MZ", "countryName": "Mozambique", "Image Name": "Mozambique-MZ www.livepincode.com" },
    { "countryCode": "NA", "countryName": "Namibia", "Image Name": "Namibia-NA www.livepincode.com" },
    { "countryCode": "NC", "countryName": "New Caledonia", "Image Name": "New Caledonia-NC www.livepincode.com" },
    { "countryCode": "NE", "countryName": "Niger", "Image Name": "Niger-NE www.livepincode.com" },
    { "countryCode": "NF", "countryName": "Norfolk Island", "Image Name": "Norfolk Island-NF www.livepincode.com" },
    { "countryCode": "NG", "countryName": "Nigeria", "Image Name": "Nigeria-NG www.livepincode.com" },
    { "countryCode": "NI", "countryName": "Nicaragua", "Image Name": "Nicaragua-NI www.livepincode.com" },
    { "countryCode": "NL", "countryName": "Netherlands", "Image Name": "Netherlands-NL www.livepincode.com" },
    { "countryCode": "NO", "countryName": "Norway", "Image Name": "Norway-NO www.livepincode.com" },
    { "countryCode": "NP", "countryName": "Nepal", "Image Name": "Nepal-NP www.livepincode.com" },
    { "countryCode": "NR", "countryName": "Nauru", "Image Name": "Nauru-NR www.livepincode.com" },
    { "countryCode": "NU", "countryName": "Niue", "Image Name": "Niue-NU www.livepincode.com" },
    { "countryCode": "NZ", "countryName": "New Zealand", "Image Name": "New Zealand-NZ www.livepincode.com" },
    { "countryCode": "OM", "countryName": "Oman", "Image Name": "Oman-OM www.livepincode.com" },
    { "countryCode": "PA", "countryName": "Panama", "Image Name": "Panama-PA www.livepincode.com" },
    { "countryCode": "PE", "countryName": "Peru", "Image Name": "Peru-PE www.livepincode.com" },
    { "countryCode": "PF", "countryName": "French Polynesia", "Image Name": "French Polynesia-PF www.livepincode.com" },
    { "countryCode": "PG", "countryName": "Papua New Guinea", "Image Name": "Papua New Guinea-PG www.livepincode.com" },
    { "countryCode": "PH", "countryName": "Philippines", "Image Name": "Philippines-PH www.livepincode.com" },
    { "countryCode": "PK", "countryName": "Pakistan", "Image Name": "Pakistan-PK www.livepincode.com" },
    { "countryCode": "PL", "countryName": "Poland", "Image Name": "Poland-PL www.livepincode.com" },
    { "countryCode": "PM", "countryName": "Saint Pierre", "Image Name": "Saint Pierre and Miquelon-PM www.livepincode.com" },
    { "countryCode": "PN", "countryName": "Pitcairn Islands", "Image Name": "Pitcairn Islands-PN www.livepincode.com" },
    { "countryCode": "PR", "countryName": "Puerto Rico", "Image Name": "Puerto Rico-PR www.livepincode.com" },
    { "countryCode": "PS", "countryName": "Palestine", "Image Name": "Palestine-PS www.livepincode.com" },
    { "countryCode": "PT", "countryName": "Portugal", "Image Name": "Portugal-PT www.livepincode.com" },
    { "countryCode": "PW", "countryName": "Palau", "Image Name": "Palau-PW www.livepincode.com" },
    { "countryCode": "PY", "countryName": "Paraguay", "Image Name": "Paraguay-PY www.livepincode.com" },
    { "countryCode": "QA", "countryName": "Qatar", "Image Name": "Qatar-QA www.livepincode.com" },
    { "countryCode": "RE", "countryName": "Réunion", "Image Name": "Réunion-RE www.livepincode.com" },
    { "countryCode": "RO", "countryName": "Romania", "Image Name": "Romania-RO www.livepincode.com" },
    { "countryCode": "RS", "countryName": "Serbia", "Image Name": "Serbia-RS www.livepincode.com" },
    { "countryCode": "RU", "countryName": "Russia", "Image Name": "Russia-RU www.livepincode.com" },
    { "countryCode": "RW", "countryName": "Rwanda", "Image Name": "Rwanda-RW www.livepincode.com" },
    { "countryCode": "SA", "countryName": "Saudi Arabia", "Image Name": "Saudi Arabia-SA www.livepincode.com" },
    { "countryCode": "SB", "countryName": "Solomon Islands", "Image Name": "Solomon Islands-SB www.livepincode.com" },
    { "countryCode": "SC", "countryName": "Seychelles", "Image Name": "Seychelles-SC www.livepincode.com" },
    { "countryCode": "SD", "countryName": "Sudan", "Image Name": "Sudan-SD www.livepincode.com" },
    { "countryCode": "SE", "countryName": "Sweden", "Image Name": "Sweden-SE www.livepincode.com" },
    { "countryCode": "SG", "countryName": "Singapore", "Image Name": "Singapore-SG www.livepincode.com" },
    { "countryCode": "SH", "countryName": "Saint Helena", "Image Name": "Saint Helena-SH www.livepincode.com" },
    { "countryCode": "SI", "countryName": "Slovenia", "Image Name": "Slovenia-SI www.livepincode.com" },
    { "countryCode": "SJ", "countryName": "Svalbard and Jan Mayen", "Image Name": "Svalbard and Jan Mayen-SJ www.livepincode.com" },
    { "countryCode": "SK", "countryName": "Slovakia", "Image Name": "Slovakia-SK www.livepincode.com" },
    { "countryCode": "SL", "countryName": "Sierra Leone", "Image Name": "Sierra Leone-SL www.livepincode.com" },
    { "countryCode": "SM", "countryName": "San Marino", "Image Name": "San Marino-SM www.livepincode.com" },
    { "countryCode": "SN", "countryName": "Senegal", "Image Name": "Senegal-SN www.livepincode.com" },
    { "countryCode": "SO", "countryName": "Somalia", "Image Name": "Somalia-SO www.livepincode.com" },
    { "countryCode": "SR", "countryName": "Suriname", "Image Name": "Suriname-SR www.livepincode.com" },
    { "countryCode": "SS", "countryName": "South Sudan", "Image Name": "South Sudan-SS www.livepincode.com" },
    { "countryCode": "ST", "countryName": "São Tomé ", "Image Name": "São Tomé and Príncipe-ST www.livepincode.com" },
    { "countryCode": "SV", "countryName": "El Salvador", "Image Name": "El Salvador-SV www.livepincode.com" },
    { "countryCode": "SX", "countryName": "Sint Maarten", "Image Name": "Sint Maarten-SX www.livepincode.com" },
    { "countryCode": "SY", "countryName": "Syria", "Image Name": "Syria-SY www.livepincode.com" },
    { "countryCode": "SZ", "countryName": "Eswatini", "Image Name": "Eswatini-SZ www.livepincode.com" },
    { "countryCode": "TC", "countryName": "Turks and Caicos", "Image Name": "Turks and Caicos Islands-TC www.livepincode.com" },
    { "countryCode": "TD", "countryName": "Chad", "Image Name": "Chad-TD www.livepincode.com" },
    { "countryCode": "TF", "countryName": "French Southern", "Image Name": "French Southern Territories-TF www.livepincode.com" },
    { "countryCode": "TG", "countryName": "Togo", "Image Name": "Togo-TG www.livepincode.com" },
    { "countryCode": "TH", "countryName": "Thailand", "Image Name": "Thailand-TH www.livepincode.com" },
    { "countryCode": "TJ", "countryName": "Tajikistan", "Image Name": "Tajikistan-TJ www.livepincode.com" },
    { "countryCode": "TK", "countryName": "Tokelau", "Image Name": "Tokelau-TK www.livepincode.com" },
    { "countryCode": "TL", "countryName": "Timor-Leste", "Image Name": "Timor-Leste-TL www.livepincode.com" },
    { "countryCode": "TM", "countryName": "Turkmenistan", "Image Name": "Turkmenistan-TM www.livepincode.com" },
    { "countryCode": "TN", "countryName": "Tunisia", "Image Name": "Tunisia-TN www.livepincode.com" },
    { "countryCode": "TO", "countryName": "Tonga", "Image Name": "Tonga-TO www.livepincode.com" },
    { "countryCode": "TR", "countryName": "Turkey", "Image Name": "Turkey-TR www.livepincode.com" },
    { "countryCode": "TT", "countryName": "Trinidad and Tobago", "Image Name": "Trinidad and Tobago-TT www.livepincode.com" },
    { "countryCode": "TV", "countryName": "Tuvalu", "Image Name": "Tuvalu-TV www.livepincode.com" },
    { "countryCode": "TW", "countryName": "Taiwan", "Image Name": "Taiwan-TW www.livepincode.com" },
    { "countryCode": "TZ", "countryName": "Tanzania", "Image Name": "Tanzania-TZ www.livepincode.com" },
    { "countryCode": "UA", "countryName": "Ukraine", "Image Name": "Ukraine-UA www.livepincode.com" },
    { "countryCode": "UG", "countryName": "Uganda", "Image Name": "Uganda-UG www.livepincode.com" },
    { "countryCode": "UM", "countryName": "U.S. Outlying", "Image Name": "U.S. Outlying Islands-UM www.livepincode.com" },
    { "countryCode": "US", "countryName": "United States", "Image Name": "United States-US www.livepincode.com" },
    { "countryCode": "UY", "countryName": "Uruguay", "Image Name": "Uruguay-UY www.livepincode.com" },
    { "countryCode": "UZ", "countryName": "Uzbekistan", "Image Name": "Uzbekistan-UZ www.livepincode.com" },
    { "countryCode": "VA", "countryName": "Vatican City", "Image Name": "Vatican City-VA www.livepincode.com" },
    { "countryCode": "VC", "countryName": "St Vincent", "Image Name": "St Vincent and Grenadines-VC www.livepincode.com" },
    { "countryCode": "VE", "countryName": "Venezuela", "Image Name": "Venezuela-VE www.livepincode.com" },
    { "countryCode": "VG", "countryName": "British Virgin", "Image Name": "British Virgin Islands-VG www.livepincode.com" },
    { "countryCode": "VI", "countryName": "U.S. Virgin", "Image Name": "U.S. Virgin Islands-VI www.livepincode.com" },
    { "countryCode": "VN", "countryName": "Vietnam", "Image Name": "Vietnam-VN www.livepincode.com" },
    { "countryCode": "VU", "countryName": "Vanuatu", "Image Name": "Vanuatu-VU www.livepincode.com" },
    { "countryCode": "WF", "countryName": "Wallis and Futuna", "Image Name": "Wallis and Futuna-WF www.livepincode.com" },
    { "countryCode": "WS", "countryName": "Samoa", "Image Name": "Samoa-WS www.livepincode.com" },
    { "countryCode": "XK", "countryName": "Kosovo", "Image Name": "Kosovo-XK www.livepincode.com" },
    { "countryCode": "YE", "countryName": "Yemen", "Image Name": "Yemen-YE www.livepincode.com" },
    { "countryCode": "YT", "countryName": "Mayotte", "Image Name": "Mayotte-YT www.livepincode.com" },
    { "countryCode": "ZA", "countryName": "South Africa", "Image Name": "South Africa-ZA www.livepincode.com" },
    { "countryCode": "ZM", "countryName": "Zambia", "Image Name": "Zambia-ZM www.livepincode.com" },
    { "countryCode": "ZW", "countryName": "Zimbabwe", "Image Name": "Zimbabwe-ZW www.livepincode.com" }
]
function addCountry(selectedCountry) {
    optionsCountries.innerHTML = "";
    countries.forEach(country => {
        let li = `<li onclick="updateCountryName(this)"><img src="./1x1/${country.countryCode.toLowerCase()}.svg"/> <span>${country.countryName}</span></li>`;
        optionsCountries.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();
function updateCountryName(selectedLi) {
    searchInpCountries.value = "";
    addCountry(selectedLi.innerText);
    wrapperCountries.classList.remove("active");
    selectBtnCountries.innerHTML = selectedLi.innerHTML;
    downArrowCountries.style.display = 'none'
    crossArrowcCountries.style.display = 'block'
}
searchInpCountries.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInpCountries.value.toLowerCase();
    arr = countries.filter(data => {
        return data.countryName.toLowerCase().startsWith(searchWord);
    }).map(data => {
        return `<li onclick="updateCountryName(this)"><img src="./1x1/${data.countryCode.toLowerCase()}.svg" <span>${data.countryName}</span></li>`;
    }).join("");
    optionsCountries.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});
crossArrowcCountries.addEventListener('click', () => {
    selectBtnCountries.innerHTML = `<span>Select Country</span>`
    downArrowCountries.style.display = 'block'
    crossArrowcCountries.style.display = 'none'
})
selectBtnCountries.addEventListener("click", () => contentCountries.classList.toggle("show"));

// country pincode options 
const countryPincodeSearch = document.querySelector('.country-pincode-search')
const countryPincodeOptions = document.querySelector('.country-pincode-options')
const pincodeSearchText = document.querySelector('.pincode-search-text')
const pincodeSearchImg = document.querySelector('.pincode-search-img')
const countryPincodeOptionsUl = document.querySelector('.country-pincode-options-ul')


function addPincodeFlag() {
    countries.map(country => {
        countryPincodeOptionsUl.innerHTML += `<li class="country-pincode-item">
                                                <img src="./1x1/${country.countryCode.toLowerCase()}.svg" alt="flag-icon" data-item="${country.countryCode.toLowerCase()}">
                                                <p class="mb-0 mt-1">${country.countryCode}</p>
                                            </li>`
    })

    const countryPincodeItems = document.querySelectorAll('.country-pincode-item')
    countryPincodeItems.forEach(item => {
        item.addEventListener('click', () => {
            let itemImg = item.childNodes[1].dataset.item
            let itemText = item.childNodes[3].textContent
            pincodeSearchImg.src = `./1x1/${itemImg}.svg`
            pincodeSearchText.textContent = itemText
        })
    })
}
addPincodeFlag()

countryPincodeSearch.addEventListener('click', () => countryPincodeOptions.classList.toggle('block-show'))


// select state 
const wrapperState = document.querySelector(".wrapper-state"),
    selectBtnState = wrapperState.querySelector(".select-btn-state"),
    searchInpState = wrapperState.querySelector(".input-state"),
    optionsState = wrapperState.querySelector(".options-state"),
    downArrowState = document.querySelector('.down-arrow-state'),
    crossArrowState = document.querySelector('.cross-arrow-state'),
    contentState = document.querySelector('.content-state')

let states = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];

function addState(selectedCountry) {
    optionsState.innerHTML = "";
    states.forEach(state => {
        let li = `<li onclick="updateStateName(this)">${state}</li>`;
        optionsState.insertAdjacentHTML("beforeend", li);
    });
}
addState();
function updateStateName(selectedLi) {
    searchInpState.value = "";
    addState(selectedLi.innerText);
    wrapperState.classList.remove("active");
    selectBtnState.firstElementChild.innerText = selectedLi.innerText;
    downArrowState.style.display = 'none'
    crossArrowState.style.display = 'block'
}
searchInpState.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInpState.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        return `<li onclick="updateStateName(this)">${data}</li>`;
    }).join("");
    optionsState.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

crossArrowState.addEventListener('click', () => {
    selectBtnState.firstElementChild.innerText = "Select State"
    downArrowState.style.display = 'block'
    crossArrowState.style.display = 'none'
})

selectBtnState.addEventListener("click", () => contentState.classList.toggle("show"));

// select district 
const wrapperDistrict = document.querySelector(".wrapper-district"),
    selectBtnDistrict = wrapperDistrict.querySelector(".select-btn-district"),
    searchInpDistrict = wrapperDistrict.querySelector(".input-district"),
    optionsDistrict = wrapperDistrict.querySelector(".options-district"),
    downArrowDistrict = document.querySelector('.down-arrow-district'),
    crossArrowDistrict = document.querySelector('.cross-arrow-district'),
    contentDistrict = document.querySelector('.content-district')

let districts = ['Agra', 'Aligarh', 'Allahabad', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Faizabad', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kheri', 'Kushinagar', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Raebareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shamli', 'Shravasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'];

function addDistrict(selectedCountry) {
    optionsDistrict.innerHTML = "";
    districts.forEach(district => {
        let li = `<li onclick="updateDistrictName(this)">${district}</li>`;
        optionsDistrict.insertAdjacentHTML("beforeend", li);
    });
}
addDistrict();
function updateDistrictName(selectedLi) {
    searchInpDistrict.value = "";
    addDistrict(selectedLi.innerText);
    wrapperDistrict.classList.remove("active");
    selectBtnDistrict.firstElementChild.innerText = selectedLi.innerText;
    downArrowDistrict.style.display = 'none'
    crossArrowDistrict.style.display = 'block'
}
searchInpDistrict.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInpDistrict.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        return `<li onclick="updateDistrictName(this)">${data}</li>`;
    }).join("");
    optionsDistrict.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

crossArrowDistrict.addEventListener('click', () => {
    selectBtnDistrict.firstElementChild.innerText = 'Select District'
    downArrowDistrict.style.display = 'block'
    crossArrowDistrict.style.display = 'none'
})

selectBtnDistrict.addEventListener("click", () => contentDistrict.classList.toggle("show"));


// select post office
const wrapperPost = document.querySelector(".wrapper-post"),
    selectBtnPost = wrapperPost.querySelector(".select-btn-post"),
    searchInpPost = wrapperPost.querySelector(".input-post"),
    optionsPost = wrapperPost.querySelector(".options-post"),
    downArrowPost = document.querySelector('.down-arrow-post'),
    crossArrowPost = document.querySelector('.cross-arrow-post'),
    contentPost = document.querySelector('.content-post')

let posts = ['Post1', 'Post2', 'Post3', 'Post4', 'Post6', 'Post7', 'Post8', 'Post9', 'Post10'];

function addPost(selectedCountry) {
    optionsPost.innerHTML = "";
    posts.forEach(post => {
        let li = `<li onclick="updatePost(this)">${post}</li>`;
        optionsPost.insertAdjacentHTML("beforeend", li);
    });
}
addPost();
function updatePost(selectedLi) {
    searchInpPost.value = "";
    addPost(selectedLi.innerText);
    wrapperPost.classList.remove("active");
    selectBtnPost.firstElementChild.innerText = selectedLi.innerText;
    downArrowPost.style.display = 'none'
    crossArrowPost.style.display = 'block'
}
searchInpPost.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInpPost.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        return `<li onclick="updatePost(this)">${data}</li>`;
    }).join("");
    optionsDistrict.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

crossArrowPost.addEventListener('click', () => {
    selectBtnPost.firstElementChild.innerText = 'Select Post'
    downArrowPost.style.display = 'block'
    crossArrowPost.style.display = 'none'
})
selectBtnPost.addEventListener("click", () => contentPost.classList.toggle("show"));


// Pincode
const pincodeInput = document.getElementById('pincode-input')
const pincodeSearchBtn = document.getElementById('pincode-btn')
const pincodeOptions = document.querySelector('.pincode-options')
const pincodeUl = pincodeOptions.querySelector('.pincode-ul')
const crossArrowPincode = document.querySelector('.cross-arrow-pincode')
const btnSearch = document.querySelector('.btn-search')

const pincodes = [
    {
        pincode: '100001',
        postOfficeName: 'name1',
        districtName: 'district1',
        stateName: 'state1'
    },
    {
        pincode: '100002',
        postOfficeName: 'name2',
        districtName: 'district2',
        stateName: 'state2'
    },
    {
        pincode: '100003',
        postOfficeName: 'name3',
        districtName: 'district3',
        stateName: 'state3'
    },
]

function addPincode() {
    pincodes.map((pin) => {
        pincodeUl.innerHTML += `<li class="pincode-item" onclick="updatePincodeInput(this)">${pin.pincode} | ${pin.postOfficeName} | ${pin.districtName} | ${pin.stateName}</li>`
    })
}
addPincode()

function updatePincodeInput(selected) {
    pincodeOptions.classList.remove('pincode-show')
    document.querySelector('.pincode-area').classList.remove('pincode-area-radius')
    pincodeInput.value = selected.textContent
}

pincodeInput.addEventListener('keyup', () => {
    let inputValue = pincodeInput.value.toLowerCase()
    let arr = [];
    arr = pincodes.filter(data => {
        return data.pincode.toLowerCase().startsWith(inputValue);
    }).map(data => {
        return `<li class="pincode-item" onclick="updatePincodeInput(this)">${data.pincode} | ${data.postOfficeName} | ${data.districtName} | ${data.stateName}</li>`;
    }).join("");

    pincodeUl.innerHTML = arr ? arr : `<li class="pincode-item">Oops! Country not found</li>`;
})

crossArrowPincode.addEventListener('click', () => {
    pincodeInput.value = ""
    pincodeOptions.classList.remove('pincode-show')
    crossArrowPincode.classList.remove('show')
})

pincodeInput.addEventListener('click', () => {
    pincodeOptions.classList.toggle('pincode-show')
    crossArrowPincode.classList.add('show')


    document.querySelector('.pincode-area').classList.toggle('pincode-area-radius')
})

// pincode-dropdown-options
const pincodeDropdownOptions = document.querySelector('.pincode-dropdown-options')
function populateCountries() {
    countries.map(country => {
        pincodeDropdownOptions.innerHTML += `<div class="flag-dropdown-col">
    <p class="flag-dropdown-item"><img src="./1x1/${country.countryCode.toLowerCase()}.svg" alt="flag"><span>${country.countryName}</span></p></div>`
    })
}

window.addEventListener('DOMContentLoaded', populateCountries)

var selectLanguageText = document.getElementById('select-language-text')
let selectLanguage = document.querySelector('.select-language')
var languageItems = document.querySelectorAll('.language-item')
var selectLanguageContent = document.querySelector('.select-language-content')

selectLanguage.addEventListener('click', () => {
    selectLanguageContent.classList.toggle('show')
})

languageItems.forEach(item => {
    item.addEventListener('click', () => {
        selectLanguageText.innerText = item.textContent
        selectLanguageContent.classList.toggle('show')
    })
})


// close popups
window.addEventListener('click', (e) => {
    // pincode
    if (e.target != pincodeOptions && e.target != pincodeInput) {
        pincodeOptions.classList.remove('pincode-show')
        document.querySelector('.pincode-area').classList.remove('pincode-area-radius')
        if (pincodeInput.value.trim() == "") {
            crossArrowPincode.classList.remove('show')
        }
    }


    // country
    const selectCountry = document.querySelector('.select-country')
    if (!selectCountry.contains(e.target)) {
        contentCountries.classList.remove("show");
    }

    // state
    const selectState = document.querySelector('.select-state')
    if (!selectState.contains(e.target)) {
        contentState.classList.remove('show')
    }


    // district 
    const selectDistrict = document.querySelector('.select-district')
    if (!selectDistrict.contains(e.target)) {
        contentDistrict.classList.remove('show')
    }

    // post
    const selectPost = document.querySelector('.select-post')
    if (!selectPost.contains(e.target)) {
        contentPost.classList.remove('show')
    }

    // country pincode search
    if (!countryPincodeSearch.contains(e.target)) {
        countryPincodeOptions.classList.remove('block-show')
    }

    // select language 
    const selectLanguageContainer = document.querySelector('.select-language-container')
    if (!selectLanguageContainer.contains(e.target)) {
        selectLanguageContent.classList.remove('show')
    }
})