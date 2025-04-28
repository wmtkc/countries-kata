import Greeting from "./Greeting"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import "@testing-library/jest-dom/vitest"

describe("Greeting", () => {
    it("renders default greeting", () => {
        render(<Greeting />)
        expect(screen.getByText("Hello, World!"))
    })

    it("renders greeting with name", () => {
        render(<Greeting name="Dev" />)
        expect(screen.getByText("Hello, Dev!"))
    })
})