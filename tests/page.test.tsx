import { render, screen } from "@testing-library/react";

import Home from "../src/app/page";

describe('Página inicial', () => {
  it('deve renderizar a logo do Next.js com o alt "Next.js logo"', () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js Logo");
    expect(logo).toBeInTheDocument();
  });
});
