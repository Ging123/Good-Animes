import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HeaderMobile from "./header_mobile";
import "@testing-library/jest-dom";

describe("Test not logged mobile header", () => {

  it("Must open the drawer on click", async () => {
    render(<HeaderMobile/>);
    const iconButton = screen.getByTestId("DehazeIcon");

    await userEvent.click(iconButton);
    const dubbledLink = screen.getByText("Dubbed animes");

    const subtitledLink = screen.getByText("Subtitled animes");
    const favoritesLink = screen.getByText("Favorites");

    const genresLink = screen.getByText("Genres");
    const loginLink = screen.getByText("Login");

    const nav = [ dubbledLink, subtitledLink, favoritesLink, genresLink, loginLink ];

    for(const link of nav) {
      expect(link).toBeInTheDocument();
    }
  });
});