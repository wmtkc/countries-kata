import { useContext } from "react"
import { CountriesContext } from "../pages/Countries"

type GreetingProps = {
    name?: String
}

const Greeting = ({ name }: GreetingProps) => {
    const countries = useContext(CountriesContext)
    return (
        <>
            <h1>Hello, { name ?? "World"}!</h1>
            <h2>First Country: {countries.length > 0 && countries[0].commonName}</h2>
        </>
    )
}

export default Greeting