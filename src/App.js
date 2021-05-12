import './App.css';
import {FormControl, MenuItem, Select} from "@material-ui/core";
import {useEffect, useState} from "react";

function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountriesData = async () => {
            await fetch('https://disease.sh/v3/covid-19/countries')
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw response;
                })
                .then((data) => {
                    const countryList = data.map(country => ({
                        name: country.country,
                        value: country.countryInfo.iso2,
                    }))
                    setCountries(countryList);
                })
        }

        getCountriesData()
            .then(r => r)
            .catch(e => console.log(e))
    }, []);

    return (
        <div className="App">
            <div className={'app__header'}>
                <h1>COVID-19-TRACKER</h1>
                <FormControl className={'app__dropdown'}>
                    <Select
                        variant={'outlined'}
                        value={"abc"}
                    >
                        {
                            countries.map(country => (
                                <MenuItem value={country.value}>{country.name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </div>

        </div>
    );
}

export default App;
