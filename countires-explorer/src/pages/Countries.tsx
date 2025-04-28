import { createContext, useEffect, useState } from "react"
import Greeting from "../components/Greeting"
import { Country } from "../types/country"

export const CountriesContext = createContext<Array<Country>>([])

const Countries = () => {
    const [countries, setCountries] = useState<Array<Country>>([])

    const apiDataToCountry = (apiData: any): Country => ({
        borders: apiData.borders,
        capital: apiData.capital,
        currencies: Object.values(apiData.currencies).map((currency: any) => currency.name),
        flag: apiData.flag,
        languages: Object.values(apiData.languages),
        commonName: apiData.name.common,
        nativeName: (Object.values(apiData.name.nativeName)[0] as any)?.common,
        population: apiData.population,
        region: apiData.region,
        subregion: apiData.subregion,
        timezones: apiData.timezones
    })

    const getCountries = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/all` +
            `?fields=borders,capital,currencies,flag,languages,name,population,region,subregion,timezones`)
        if (response.ok) {
            const data = await response.json()
            const trimmedCountries = data.map((apiData: any) => apiDataToCountry(apiData))
            setCountries(trimmedCountries)
        } else {
            console.error("Problem occured while fetching countries...", response)
        }
    }

    useEffect(() => {
        getCountries()
    }, [])

    return(
        <CountriesContext.Provider value={countries} >
            <Greeting name="Dev" />
        </CountriesContext.Provider>
    )
}

export default Countries