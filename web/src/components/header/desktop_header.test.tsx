import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HeaderDesktop from "./header_desktop";
import "@testing-library/jest-dom";

describe("Test not logged desktop header", () => {

  it("Must have in the nav animes, genres and favorites", () => {
    render(<HeaderDesktop/>);
    
    const animesText = screen.getByText("Animes");
    const genresText = screen.getByText("Genres");

    const favoritesText = screen.getByText("Favorites");
    const nav = [ animesText, genresText, favoritesText ];
    
    for(const link of nav) {
      expect(link).toBeInTheDocument();
    }
  });

  it("Must show dubbled and subtitled text when click in animes", async () => {
    render(<HeaderDesktop/>);
    let dubbedAnimesText = screen.queryByText("Dubbed");

    expect(dubbedAnimesText).toBeNull();
    const animesNavText = screen.getByText("Animes"); 

    await userEvent.click(animesNavText);
    dubbedAnimesText = screen.getByText("Dubbed");

    const subtitledAnimesText = screen.getByText("Subtitled");
    expect(subtitledAnimesText).toBeInTheDocument();
    
    expect(dubbedAnimesText).toBeInTheDocument();
  });
});