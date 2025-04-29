import { Country } from "../types/Country"
import "../styles/country-card.css"

type CountryCardProps = {
    country: Country
}

const CountryCard = ({ country }: CountryCardProps) => { 
    const capitalLabel = "Capital" + ((country.capital.length > 1) ? "s" : "") + ":"
    const capitalText =  country.capital.map(capitalName => (capitalName)).join(", ")
                    
    return (
        <div className="country-card">
            <div className="flag-emoji">{country.flag}</div>
            <div className="quick-facts">
                <div className="name">{country.commonName}</div>
                <div>
                    <span>Population: </span>
                    <span>{country.population.toLocaleString()}</span>
                </div>
                <div>
                    <span>Region: </span>
                    <span>{country.region}</span>
                </div>
                <div>
                    <span>{capitalLabel}</span>
                    <span>{capitalText}</span>
                </div>
            </div>
        </div>
    )
}

export default CountryCard