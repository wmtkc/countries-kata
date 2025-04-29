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
        render(<CountryCard country={botswanaCountry} />)
        expect(screen.getByText(botswanaCountry.flag))
        expect(screen.getByText(botswanaCountry.commonName))
        expect(screen.getByText("Population: " + botswanaCountry.population))
        expect(screen.getByText("Region: " + botswanaCountry.region))
        expect(screen.getByText("Capital: " + botswanaCountry.capital[0]))
    })

    it("displays multiple capitals where relevant", () => {
        render(<CountryCard country={southAfricaCountry} />)
        expect(screen.getByText(southAfricaCountry.flag))
        expect(screen.getByText(southAfricaCountry.commonName))
        expect(screen.getByText("Population: " + southAfricaCountry.population))
        expect(screen.getByText("Region: " + southAfricaCountry.region))
        expect(screen.getByText("Capitals:" + southAfricaCountry.capital.map(capitalName => (" " + capitalName))))
    })
})