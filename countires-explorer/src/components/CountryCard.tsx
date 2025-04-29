import { Country } from "../types/Country"
import "../styles/country-card.css"

type CountryCardProps = {
    country: Country
}

const CountryCard = ({ country }: CountryCardProps) => { 
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
                { country.capital.length > 0 && 
                    <div>
                        <span>{"Capital" + ((country.capital.length > 1) ? "s" : "") + ":"}</span>
                        <span>{country.capital.map(capitalName => (capitalName)).join(", ")}</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default CountryCard