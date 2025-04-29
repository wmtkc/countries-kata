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
        render(<DetailModal country={botswanaCountry} />)
        expect(screen.getByText(botswanaCountry.flag))
        expect(screen.getByText(botswanaCountry.commonName))
        expect(screen.getByText(botswanaCountry.nativeName))
        expect(screen.getByText(botswanaCountry.population.toLocaleString()))
        expect(screen.getByText(botswanaCountry.region))
        expect(screen.getByText(botswanaCountry.subregion))
        botswanaCountry.currencies.forEach(currency => {
            expect(screen.getByText(currency))
        })
        botswanaCountry.languages.forEach(language => {
            expect(screen.getByText(language))
        })
        botswanaCountry.timezones.forEach(timezone => {
            expect(screen.getByText(timezone))
        })
        botswanaCountry.borders.forEach(border => {
            expect(screen.getByText(border))
        })
        expect(screen.getByText("Capital:"))
        expect(screen.getByText(botswanaCountry.capital[0]))
    })

    it("displays multiple capitals where relevant", () => {
        render(<DetailModal country={southAfricaCountry} />)
        expect(screen.getByText("Capitals:"))
        expect(screen.getByText(southAfricaCountry.capital.map(capitalName => (capitalName)).join(", ")))
    })
})
