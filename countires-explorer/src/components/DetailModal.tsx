import { Country } from "../types/Country"
import "../styles/detail-modal.css"

type DetailModalProps = {
    country?: Country,
    close: () => void
}

const DetailModal = ({ country, close }: DetailModalProps) => {
    const modalClassNames = country == null ? "detail-modal display-none" : "detail-modal display-block"
    return (
        <div className={modalClassNames}>
            <main onClick={() => {}}>
                {country && 
                    <>
                        <div className="flag-emoji">{country.flag}</div>
                        <div className="name">{country.commonName}</div>
                        <div className="detail-facts">
                            <div>
                                <span>Native Name: </span>
                                <span>{country.nativeName}</span>
                            </div>
                            <div>
                                <span>Population: </span>
                                <span>{country.population.toLocaleString()}</span>
                            </div>
                            <div>
                                <span>Region: </span>
                                <span>{country.region}</span>
                            </div>
                            { country.subregion && 
                                <div>
                                    <span>Subregion: </span>
                                    <span>{country.subregion}</span>
                                </div>
                            }
                            { country.capital.length > 0 && 
                                <div>
                                    <span>{"Capital" + ((country.capital.length > 1) ? "s" : "") + ":"}</span>
                                    <span>{country.capital.map(capitalName => (capitalName)).join(", ")}</span>
                                </div>
                            }
                            { country.languages.length > 0 && 
                                <div>
                                    <span>{"Language" + ((country.capital.length > 1) ? "s" : "") + ":"}</span>
                                    <span>{country.languages.map(langName => (langName)).join(", ")}</span>
                                </div>
                            }
                            { country.currencies.length > 0 && 
                                <div>
                                    <span>{((country.capital.length > 1) ? "Currencies" : "Currency") + ":"}</span>
                                    <span>{country.currencies.map(currencyName => (currencyName)).join(", ")}</span>
                                </div>
                            }
                            { country.borders.length > 0 && 
                                <div>
                                    <span>{"Border" + ((country.borders.length > 1) ? "s" : "") + ":"}</span>
                                    <span>{country.borders.map(borderName => (borderName)).join(", ")}</span>
                                </div>
                            }
                            { country.timezones.length > 0 && 
                                <div>
                                    <span>{"Timezone" + ((country.timezones.length > 1) ? "s" : "") + ":"}</span>
                                    <span>{country.timezones.map(timezoneName => (timezoneName)).join(", ")}</span>
                                </div>
                            }
                        </div>
                        <button onClick={ () => close() }>{"CLOSE"}</button>
                    </>
                }
            </main>
        </div>
    )
}

export default DetailModal