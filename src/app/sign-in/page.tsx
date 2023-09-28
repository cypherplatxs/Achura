'use client'
import React from 'react';
import { useState } from 'react'
import Nav from '@/components/landing/NavBar';
import Footer from '@/components/landing/Footer';
import {Input} from "@nextui-org/react";


const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  //TODO: implementar lógica de submit
  // axios.post('/api/create-user' ...)
};




export default function Example() {

  return (
    <>
    <Nav />
      <div className="isolate bg-blackpx-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
      <p className='text-9xl animate-bounce justify-center items-center text-center'>🦙</p>
        <p className="mt-2 text-lg leading-8 text-withe">
          Únete a Achura
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
       
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                    Sign UP
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Nombre de la organización
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Lastname
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                         />
<h1 className='pb-6 pt-6 font-bold'>KYC</h1>
<div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Numero de registro tributario
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Nombre del representante Legal
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>


                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                          Pais
                        </label>
                        <select id="country" name="country" className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40 form-control">
            <option value="Afghanistan"> 🇦🇪 Afghanistan</option>
            <option value="Åland Islands">🇦🇽 Åland Islands</option>
            <option value="Albania">🇦🇱 Albania</option>
            <option value="Algeria">🇩🇿 Algeria</option>
            <option value="American Samoa">🇦🇸 American Samoa</option>
            <option value="Andorra">🇦🇩 Andorra</option>
            <option value="Angola">🇦🇴 Angola</option>
            <option value="Anguilla">🇦🇮 Anguilla</option>
            <option value="Antarctica">🇦🇶 Antarctica</option>
            <option value="Antigua and Barbuda">🇦🇬 Antigua and Barbuda</option>
            <option value="Argentina">🇦🇷 Argentina</option>
            <option value="Armenia">🇦🇲 Armenia</option>
            <option value="Aruba">🇦🇼 Aruba</option>
            <option value="Australia">🇦🇺 Australia</option>
            <option value="Austria">🇦🇹 Austria</option>
            <option value="Azerbaijan">🇦🇿 Azerbaijan</option>
            <option value="Bahamas">🇧🇸 Bahamas</option>
            <option value="Bahrain">🇧🇭 Bahrain</option>
            <option value="Bangladesh">🇧🇩 Bangladesh</option>
            <option value="Barbados">🇧🇧 Barbados</option>
            <option value="Belarus">🇧🇾 Belarus</option>
            <option value="Belgium">🇧🇪 Belgium</option>
            <option value="Belize">🇧🇿 Belize</option>
            <option value="Benin">🇧🇲 Benin</option>
            <option value="Bermuda">🇧🇲 Bermuda</option>
            <option value="Bhutan">🇧🇹 Bhutan</option>
            <option value="Bolivia">🇧🇴 Bolivia</option>
            <option value="Bosnia and Herzegovina">🇧🇦 Bosnia and Herzegovina</option>
            <option value="Botswana">🇧🇼 Botswana</option>
            <option value="Bouvet Island">🇧🇻 Bouvet Island</option>
            <option value="Brazil">🇧🇷 Brazil</option>
            <option value="British Indian Ocean Territory">🇮🇴 British Indian Ocean Territory</option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">🇧🇬 Bulgaria</option>
            <option value="Burkina Faso">🇧🇫 Burkina Faso</option>
            <option value="Burundi">🇧🇮 Burundi</option>
            <option value="Cambodia">🇰🇭 Cambodia</option>
            <option value="Cameroon">🇨🇲 Cameroon</option>
            <option value="Canada">🇨🇦 Canada</option>
            <option value="Cape Verde">🇨🇻 Cape Verde</option>
            <option value="Cayman Islands">🇰🇾 Cayman Islands</option>
            <option value="Central African Republic">🇨🇫 Central African Republic</option>
            <option value="Chad">🇹🇩 Chad</option>
            <option value="Chile">🇨🇱 Chile</option>
            <option value="China">🇨🇳 China</option>
            <option value="Christmas Island">🇨🇽 Christmas Island</option>
            <option value="Cocos (Keeling) Islands">🇨🇨 Cocos (Keeling) Islands</option>
            <option value="Colombia">🇨🇴 Colombia</option>
            <option value="Comoros">🇰🇲 Comoros</option>
            <option value="Congo">🇨🇩 Congo</option>
            <option value="Congo, The Democratic Republic of The">🇨🇬Congo, The Democratic Republic of The</option>
            <option value="Cook Islands">🇨🇰 Cook Islands</option>
            <option value="Costa Rica">🇨🇷 Costa Rica</option>
            <option value="Cote D'ivoire">🇨🇮 Cote D'ivoire</option>
            <option value="Croatia">🇭🇷 Croatia</option>
            <option value="Cuba">🇨🇺 Cuba</option>
            <option value="Cyprus">🇨🇾 Cyprus</option>
            <option value="Czech Republic">🇨🇿 Czech Republic</option>
            <option value="Denmark">🇩🇰 Denmark</option>
            <option value="Djibouti">🇩🇯 Djibouti</option>
            <option value="Dominica">🇩🇲 Dominica</option>
            <option value="Dominican Republic">🇩🇴 Dominican Republic</option>
            <option value="Ecuador">🇪🇨 Ecuador</option>
            <option value="Egypt">🇪🇬 Egypt</option>
            <option value="El Salvador">🇸🇻 El Salvador</option>
            <option value="Equatorial Guinea">🇬🇶 Equatorial Guinea</option>
            <option value="Eritrea">🇪🇷 Eritrea</option>
            <option value="Estonia">🇪🇪 Estonia</option>
            <option value="Ethiopia">🇪🇹 Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">🇫🇰 Falkland Islands (Malvinas)</option>
            <option value="Faroe Islands">🇫🇴 Faroe Islands</option>
            <option value="Fiji">🇫🇯 Fiji</option>
            <option value="Finland">🇫🇮 Finland</option>
            <option value="France">🇫🇷 France</option>
            <option value="French Guiana">🇬🇫 French Guiana</option>
            <option value="French Polynesia">🇵🇫 French Polynesia</option>
            <option value="French Southern Territories">🇹🇫 French Southern Territories</option>
            <option value="Gabon">🇬🇦 Gabon</option>
            <option value="Gambia">🇬🇲 Gambia</option>
            <option value="Georgia">🇬🇪 Georgia</option>
            <option value="Germany">🇩🇪 Germany</option>
            <option value="Ghana">🇬🇭 Ghana</option>
            <option value="Gibraltar">🇬🇮 Gibraltar</option>
            <option value="Greece">🇬🇷Greece</option>
            <option value="Greenland">🇬🇱 Greenland</option>
            <option value="Grenada">🇬🇩 Grenada</option>
            <option value="Guadeloupe">🇬🇵 Guadeloupe</option>
            <option value="Guam">🇬🇺 Guam</option>
            <option value="Guatemala">🇬🇹 Guatemala</option>
            <option value="Guernsey">🇬🇬 Guernsey</option>
            <option value="Guinea">🇬🇳 Guinea</option>
            <option value="Guinea-bissau">🇬🇼 Guinea-bissau</option>
            <option value="Guyana">🇬🇾 Guyana</option>
            <option value="Haiti">🇭🇹 Haiti</option>
            <option value="Heard Island and Mcdonald Islands">🇭🇲 Heard Island and Mcdonald Islands</option>
            <option value="Honduras">🇭🇳 Honduras</option>
            <option value="Hong Kong">🇭🇰 Hong Kong</option>
            <option value="Hungary">🇭🇺 Hungary</option>
            <option value="Iceland">🇮🇸 Iceland</option>
            <option value="India">🇮🇳 India</option>
            <option value="Indonesia">🇮🇩 Indonesia</option>
            <option value="Iran, Islamic Republic of">🇮🇷 Iran, Islamic Republic of</option>
            <option value="Iraq">🇮🇶 Iraq</option>
            <option value="Ireland">🇮🇪 Ireland</option>
            <option value="Isle of Man">🇮🇲 Isle of Man</option>
            <option value="Israel">🇮🇱 Israel</option>
            <option value="Italy">🇮🇹 Italy</option>
            <option value="Jamaica">🇯🇲 Jamaica</option>
            <option value="Japan">🇯🇵 Japan</option>
            <option value="Jersey">🇯🇪 Jersey</option>
            <option value="Jordan">🇯🇴 Jordan</option>
            <option value="Kazakhstan">🇰🇿 Kazakhstan</option>
            <option value="Kenya">🇰🇪 Kenya</option>
            <option value="Kiribati">🇰🇮 Kiribati</option>
            <option value="Korea, Democratic People's Republic of">🇰🇵 Korea, Democratic People's Republic of</option>
            <option value="Korea, Republic of">🇰🇷 Korea, Republic of</option>
            <option value="Kuwait">🇰🇼 Kuwait</option>
            <option value="Kyrgyzstan">🇰🇬 Kyrgyzstan</option>
            <option value="Lao People's Democratic Republic">🇱🇦 Lao People's Democratic Republic</option>
            <option value="Latvia">🇱🇻 Latvia</option>
            <option value="Lebanon">🇱🇧 Lebanon</option>
            <option value="Lesotho">🇱🇸 Lesotho</option>
            <option value="Liberia">🇱🇷 Liberia</option>
            <option value="Libyan Arab Jamahiriya">🇱🇾 Libyan Arab Jamahiriya</option>
            <option value="Liechtenstein">🇱🇮 Liechtenstein</option>
            <option value="Lithuania">🇱🇹 Lithuania</option>
            <option value="Luxembourg">🇱🇺 Luxembourg</option>
            <option value="Macao">🇲🇴 Macao</option>
            <option value="Macedonia, The Former Yugoslav Republic of">🇲🇰 Macedonia, The Former Yugoslav Republic of</option>
            <option value="Madagascar">🇲🇬 Madagascar</option>
            <option value="Malawi">🇲🇼 Malawi</option>
            <option value="Malaysia">🇲🇾 Malaysia</option>
            <option value="Maldives">🇲🇻 Maldives</option>
            <option value="Mali">🇲🇱 Mali</option>
            <option value="Malta">🇲🇹 Malta</option>
            <option value="Marshall Islands">🇲🇭 Marshall Islands</option>
            <option value="Martinique">🇲🇶Martinique</option>
            <option value="Mauritania">🇲🇷 Mauritania</option>
            <option value="Mauritius">🇲🇺 Mauritius</option>
            <option value="Mayotte">🇾🇹 Mayotte</option>
            <option value="Mexico">🇲🇽 Mexico</option>
            <option value="Micronesia, Federated States of">🇫🇲 Micronesia, Federated States of</option>
            <option value="Moldova, Republic of">🇲🇩 Moldova, Republic of</option>
            <option value="Monaco">🇲🇨 Monaco</option>
            <option value="Mongolia">🇲🇳 Mongolia</option>
            <option value="Montenegro">🇲🇪 Montenegro</option>
            <option value="Montserrat">🇲🇸 Montserrat</option>
            <option value="Morocco">🇲🇦 Morocco</option>
            <option value="Mozambique">🇲🇿 Mozambique</option>
            <option value="Myanmar">🇲🇲 Myanmar</option>
            <option value="Namibia">🇳🇦 Namibia</option>
            <option value="Nauru">🇳🇷 Nauru</option>
            <option value="Nepal">🇳🇵 Nepal</option>
            <option value="Netherlands">🇳🇱 Netherlands</option>
            <option value="New Caledonia">🇳🇨 New Caledonia</option>
            <option value="New Zealand">🇳🇿 New Zealand</option>
            <option value="Nicaragua">🇳🇮 Nicaragua</option>
            <option value="Niger">🇳🇪 Niger</option>
            <option value="Nigeria">🇳🇬 Nigeria</option>
            <option value="Niue">🇳🇺 Niue</option>
            <option value="Norfolk Island">🇳🇫 Norfolk Island</option>
            <option value="Northern Mariana Islands">🇲🇵 Northern Mariana Islands</option>
            <option value="Norway">🇳🇴 Norway</option>
            <option value="Oman">🇴🇲 Oman</option>
            <option value="Pakistan">🇵🇰 Pakistan</option>
            <option value="Palau">🇵🇼 Palau</option>
            <option value="Palestinian Territory, Occupied">🇵🇸 Palestinian Territory, Occupied</option>
            <option value="Panama">🇵🇦 Panama</option>
            <option value="Papua New Guinea">🇵🇬Papua New Guinea</option>
            <option value="Paraguay">🇵🇾 Paraguay</option>
            <option value="Peru">🇵🇪 Peru</option>
            <option value="Philippines">🇵🇭 Philippines</option>
            <option value="Pitcairn">🇵🇳 Pitcairn</option>
            <option value="Poland">🇵🇱 Poland</option>
            <option value="Portugal">🇵🇹 Portugal</option>
            <option value="Puerto Rico">🇵🇷 Puerto Rico</option>
            <option value="Qatar">🇶🇦 Qatar</option>
            <option value="Reunion">🇷🇪 Reunion</option>
            <option value="Romania">🇷🇴 Romania</option>
            <option value="Russian Federation">🇷🇺 Russian Federation</option>
            <option value="Rwanda">🇷🇼 Rwanda</option>
            <option value="Saint Helena">🇸🇭 Saint Helena</option>
            <option value="Saint Kitts and Nevis">🇰🇳 Saint Kitts and Nevis</option>
            <option value="Saint Lucia">🇱🇨 Saint Lucia</option>
            <option value="Saint Pierre and Miquelon">🇵🇲 Saint Pierre and Miquelon</option>
           <option value="Samoa">🇦🇸 Samoa</option>
            <option value="San Marino">🇸🇲 San Marino</option>
            <option value="Sao Tome and Principe">🇸🇹 Sao Tome and Principe</option>
            <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
            <option value="Senegal">🇸🇳 Senegal</option>
            <option value="Serbia">🇷🇸 Serbia</option>
            <option value="Seychelles">🇸🇨 Seychelles</option>
            <option value="Sierra Leone">🇸🇱 Sierra Leone</option>
            <option value="Singapore">🇸🇬 Singapore</option>
            <option value="Slovakia">🇸🇰 Slovakia</option>
            <option value="Slovenia">🇸🇮 Slovenia</option>
            <option value="Solomon Islands">🇸🇧 Solomon Islands</option>
            <option value="Somalia">🇸🇴 Somalia</option>
            <option value="South Africa">🇿🇦South Africa</option>
            <option value="South Georgia and The South Sandwich Islands">🇬🇸 South Georgia and The South Sandwich Islands</option>
            <option value="Spain">🇪🇸 Spain</option>
            <option value="Sri Lanka">🇱🇰 Sri Lanka</option>
            <option value="Sudan">🇸🇩 Sudan</option>
            <option value="Suriname">🇸🇷 Suriname</option>
            <option value="Svalbard and Jan Mayen">🇸🇯 Svalbard and Jan Mayen</option>
            <option value="Swaziland">🇸🇿 Swaziland</option>
            <option value="Sweden">🇸🇪 Sweden</option>
            <option value="Switzerland">🇨🇭 Switzerland</option>
            <option value="Syrian Arab Republic">🇸🇾 Syrian Arab Republic</option>
            <option value="Taiwan">🇹🇼 Taiwan</option>
            <option value="Tajikistan">🇹🇯 Tajikistan</option>
            <option value="Tanzania, United Republic of">🇹🇿 Tanzania, United Republic of</option>
            <option value="Thailand">🇹🇭 Thailand</option>
            <option value="Timor-leste">🇹🇱 Timor-leste</option>
            <option value="Togo">🇹🇬 Togo</option>
            <option value="Tokelau">🇹🇰 Tokelau</option>
            <option value="Tonga">🇹🇴 Tonga</option>
            <option value="Trinidad and Tobago">🇹🇹 Trinidad and Tobago</option>
            <option value="Tunisia">🇹🇳 Tunisia</option>
            <option value="Turkey">🇹🇷 Turkey</option>
            <option value="Turkmenistan">🇹🇲 Turkmenistan</option>
            <option value="Turks and Caicos Islands">🇹🇨 Turks and Caicos Islands</option>
            <option value="Tuvalu">🇹🇻 Tuvalu</option>
            <option value="Uganda">🇺🇬 Uganda</option>
            <option value="Ukraine">🇺🇦 Ukraine</option>
            <option value="United Arab Emirates">🇦🇪 United Arab Emirates</option>
            <option value="United Kingdom">🇬🇧 United Kingdom</option>
            <option value="United States">🇺🇸 United States</option>
            <option value="United States Minor Outlying Islands">🇺🇲 United States Minor Outlying Islands</option>
            <option value="Uruguay">🇺🇾 Uruguay</option>
            <option value="Uzbekistan">🇺🇿 Uzbekistan</option>
            <option value="Vanuatu">🇻🇺 Vanuatu</option>
            <option value="Venezuela">🇻🇪 Venezuela</option>
            <option value="Viet Nam">🇻🇳 Viet Nam</option>
            <option value="Virgin Islands, British">🇻🇬 Virgin Islands, British</option>
            <option value="Virgin Islands, U.S.">🇻🇮 Virgin Islands, U.S.</option>
            <option value="Wallis and Futuna">🇼🇫 Wallis and Futuna</option>
            <option value="Western Sahara">🇪🇭 Western Sahara</option>
            <option value="Yemen">🇾🇪 Yemen</option>
            <option value="Zambia">🇿🇲 Zambia</option>
            <option value="Zimbabwe">🇿🇼 Zimbabwe</option>
        </select>
                      
                    </div>




                    <div className="mb-2">
                     
        
  
                       
                    </div>

                    </div>
                    <div className='pt-8 animate-bounce'> <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                conecta tu Wallet Near
              </button></div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                        Sign in
                        </button>
                    </div>
                   
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Sign in
                    </a>
                </p>
            </div>
        </div>
 
        
        <div className="mt-10">
         
        </div>
      </form>
    </div>
    <Footer />
    </>
  )
}