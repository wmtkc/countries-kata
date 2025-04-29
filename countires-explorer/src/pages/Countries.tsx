import { useEffect, useState } from "react"
import { Country } from "../types/Country"
import CountryCard from "../components/CountryCard"
import "../styles/country-page.css"
import DetailModal from "../components/DetailModal"

const PAGE_SIZE = 18

const Countries = () => {
    const [countries, setCountries] = useState<Array<Country>>([])
    const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(undefined)
    const [currentPage, setCurrentPage] = useState(0)

    const canPageUp = () => currentPage > 0
    const canPageDown = () => (currentPage + 1) * PAGE_SIZE < countries.length

    const pageUp   = () => setCurrentPage(canPageUp() ? currentPage - 1 : 0)
    const pageDown = () => setCurrentPage(canPageDown() ? currentPage + 1 : currentPage)
    
    const clearCountrySelecton = () => setSelectedCountry(undefined)

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

    useEffect(() => {
        console.log("current page", currentPage)
        console.log("current page * page size", currentPage * PAGE_SIZE)
        console.log("countries length", countries.length)
    }, [currentPage])

    return(
        <>
            <div className="country-page">
                <div className="nav-buttons">
                    <button disabled={!canPageUp()} onClick={pageUp}>PREV</button>
                    {currentPage + 1}
                    <button disabled={!canPageDown()} onClick={pageDown}>NEXT</button>
                </div>
                <div className="country-list">
                    {countries.slice(currentPage * PAGE_SIZE, (currentPage * PAGE_SIZE) + PAGE_SIZE).map((country, ix) => 
                        (<CountryCard country={country} select={setSelectedCountry} key={ix} />)
                    )}
                </div>
            </div>
            <DetailModal country={selectedCountry} close={clearCountrySelecton} />
        </>
    )
}

export default Countries