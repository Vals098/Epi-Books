import {render, screen} from "@testing-library/react"
import {describe, it, expect} from "vitest"

import CommentArea from "../components/CommentArea"

describe ("CommentArea", ()=>{
    it("renders correctly", () => {
        render(<CommentArea asin="12345"/>)

        const title = screen.getByText(/comments:/i)

        expect(title).toBeInTheDocument()
    })
})