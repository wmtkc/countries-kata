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
            {/* <h2>First Country: {countries[0].name}</h2> */}
        </>
    )
}

export default Greeting