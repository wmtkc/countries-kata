import { createContext, useEffect, useState } from "react"
import Greeting from "../components/Greeting"
import { Country } from "../types/country"

export const CountriesContext = createContext<Array<Country>>([])

const Countries = () => {
    const [countries, setCountries] = useState<Array<Country>>([])

    // const apiDataToCountry => (apiData: any): Country => ({

    // })

    const getCountries = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/all` +
            `?fields=borders,capital,currencies,flag,languages,name,population,region,subregion,timezones`)
        console.log(response)
        if (response.ok) {
            const data = await response.json()
            console.dir(data[0])
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