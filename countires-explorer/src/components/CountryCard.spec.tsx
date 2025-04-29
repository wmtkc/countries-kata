import CountryCard from "./CountryCard"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import "@testing-library/jest-dom/vitest"

import { Country } from "../types/Country"
import botswanaData from "../test-fixtures/botswana.json"
import southAfricaData from "../test-fixtures/southAfrica.json"

const botswanaCountry: Country = botswanaData
const southAfricaCountry: Country = southAfricaData

describe("Country Card", () => {
    it("renders card with all basic info", () => {
        render(<CountryCard country={botswanaCountry} select={() => {}} />)
        expect(screen.getByText(botswanaCountry.flag))
        expect(screen.getByText(botswanaCountry.commonName))
        expect(screen.getByText(botswanaCountry.population.toLocaleString()))
        expect(screen.getByText(botswanaCountry.region))
        expect(screen.getByText("Capital:"))
        expect(screen.getByText(botswanaCountry.capital[0]))
    })

    it("displays multiple capitals where relevant", () => {
        render(<CountryCard country={southAfricaCountry} select={() => {}} />)
        expect(screen.getByText(southAfricaCountry.flag))
        expect(screen.getByText(southAfricaCountry.commonName))
        expect(screen.getByText(southAfricaCountry.population.toLocaleString()))
        expect(screen.getByText(southAfricaCountry.region))
        expect(screen.getByText("Capitals:"))
        expect(screen.getByText(southAfricaCountry.capital.map(capitalName => (capitalName)).join(", ")))
    })
})