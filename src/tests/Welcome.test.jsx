import { render, screen } from "@testing-library/react"
import Welcome from "../components/Welcome"
import { describe, it, expect } from "vitest"

describe("Welcome", () => {
    it('checks if the component mounts correctly', () =>{
        // 1) montaggio del componente nel DOM
        render(<Welcome/>)
        // 2) ricerca
        const welcomeComponent = screen.getByText(/welcome/i)
        // 3) interazione con l'elemento trovato (opz)
        // 4) verifica
        expect(welcomeComponent).toBeInTheDocument()
    })
})
// verified