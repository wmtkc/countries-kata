import { Country } from "../types/Country"

type CountryCardProps = {
    country: Country
}

const CountryCard = ({ country }: CountryCardProps) => { 
    const capitalText = "Capital" + ((country.capital.length > 1) ? "s" : "") + ":" + 
        country.capital.map(capitalName => (" " + capitalName))
                    
    return (
        <div style={{ height: "10rem", width: "20%", filter: "drop-shadow(8px 8px 10px gray)" }}>
            <h1>{country.flag}</h1>
            <div>
                <h2>{country.commonName}</h2>
                <h4>Population: {country.population}</h4>
                <h4>Region: {country.region}</h4>
                <h4>{capitalText}</h4>
            </div>
        </div>
    )
}

export default CountryCard