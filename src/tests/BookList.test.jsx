import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"

import BookList from "../components/BookList"
import fantasy from "../data/fantasy.json"

describe("BookList", () => {
  it("renders one card for each book", () => {
    // 1)
    render (<BookList books={fantasy}/>)
    // 2)
    const cards = screen.getAllByTestId("book-card")
    // 4)
    expect(cards.length).toBe(fantasy.length)
  })
})
// verified