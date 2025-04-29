import { useEffect, useState } from "react"
import { Country } from "../types/Country"
import CountryCard from "../components/CountryCard"
import "../styles/country-page.css"

const PAGE_SIZE = 10

const Countries = () => {
    const [countries, setCountries] = useState<Array<Country>>([])
    const [currentPage, setCurrentPage] = useState(0)

    const pageUp   = () => setCurrentPage(currentPage === 0 ? 0 : currentPage - 1)
    const pageDown = () => setCurrentPage(currentPage * PAGE_SIZE > countries.length ? currentPage : currentPage + 1)

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
            const trimmedCountries: Array<Country> = data.map((apiData: any) => apiDataToCountry(apiData))
            const sortedTrimmedCountres = trimmedCountries.sort(
                (countryA, countryB) => 
                    (countryA.commonName.toLowerCase() > countryB.commonName.toLowerCase()) ? 1 : 
                    (countryA.commonName.toLowerCase() < countryB.commonName.toLowerCase()) ? -1 : 
                    0 
            )
            setCountries(sortedTrimmedCountres)
        } else {
            console.error("Problem occured while fetching countries...", response)
        }
    }

    useEffect(() => {
        getCountries()
    }, [])

    return(
        <div className="country-page">
            <div className="country-list">
                {countries.slice(currentPage * 10, (currentPage * 10) + 10).map(country => (<CountryCard country={country} />))}
            </div>
            <div className="nav-buttons">
                <button onClick={pageUp}>PREV</button>
                <button onClick={pageDown}>NEXT</button>
            </div>
        </div>
    )
}

export default Countries