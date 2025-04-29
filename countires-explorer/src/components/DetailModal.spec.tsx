import DetailModal from "./DetailModal"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import "@testing-library/jest-dom/vitest"

import { Country } from "../types/Country"
import botswanaData from "../test-fixtures/botswana.json"
import southAfricaData from "../test-fixtures/southAfrica.json"

const botswanaCountry: Country = botswanaData
const southAfricaCountry: Country = southAfricaData

describe("Detail Modal", () => {
    it("renders modal with all available info", () => {
        render(<DetailModal country={botswanaCountry} close={()=> {}}/>)
        expect(screen.getByText(botswanaCountry.flag))
        expect(screen.getAllByText(botswanaCountry.commonName))
        expect(screen.getAllByText(botswanaCountry.nativeName))
        expect(screen.getByText(botswanaCountry.population.toLocaleString()))
        expect(screen.getByText(botswanaCountry.region))
        expect(screen.getByText(botswanaCountry.subregion))
        expect(screen.getByText(botswanaCountry.currencies.map(currencyName => (currencyName)).join(", ")))
        expect(screen.getByText(botswanaCountry.languages.map(langName => (langName)).join(", ")))
        expect(screen.getByText(botswanaCountry.timezones.map(timezoneName => (timezoneName)).join(", ")))
        expect(screen.getByText(botswanaCountry.borders.map(borderName => (borderName)).join(", ")))
        expect(screen.getByText("Capital:"))
        expect(screen.getByText(botswanaCountry.capital[0]))
    })

    it("displays multiple capitals where relevant", () => {
        render(<DetailModal country={southAfricaCountry} close={() => {}} />)
        expect(screen.getByText("Capitals:"))
        expect(screen.getByText(southAfricaCountry.capital.map(capitalName => (capitalName)).join(", ")))
    })
})
