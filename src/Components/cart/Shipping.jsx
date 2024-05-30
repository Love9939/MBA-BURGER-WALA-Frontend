import React, { useState } from 'react';
import { Country, State } from "country-state-city";

const Shipping = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [states, setStates] = useState([]);

    const handleCountryChange = (e) => {
        const countryCode = e.target.value;
        setSelectedCountry(countryCode);
        const countryStates = State.getStatesOfCountry(countryCode);
        setStates(countryStates);
    };

    return (
        <section className='shipping'>
            <main>
                <h1>SHIPPING DETAILS</h1>
                <form>
                    <div>
                        <label>H.No.</label>
                        <input type="text" placeholder='Enter House No.' />
                    </div>
                    <div>
                        <label>City</label>
                        <input type="text" placeholder='Enter City' />
                    </div>
                    <div>
                        <label>Country</label>
                        <select value={selectedCountry} onChange={handleCountryChange}>
                            <option value="">Country</option>
                            {Country && Country.getAllCountries().map((country) => (
                                <option value={country.isoCode} key={country.isoCode}>{country.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>State</label>
                        <select>
                            <option value="">State</option>
                            {states.map((state) => (
                                <option value={state.isoCode} key={state.isoCode}>{state.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Pin Code</label>
                        <input type="text" placeholder='Enter Pincode' />
                    </div>
                    <div>
                        <label>Phone No.</label>
                        <input type="text" placeholder='Enter Phone No.' />
                    </div>
                    <button type='submit'>Confirm Order</button>
                </form>
            </main>
        </section>
    )
}

export default Shipping;
