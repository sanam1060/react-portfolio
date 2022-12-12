import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutMe from "..";

afterEach(cleanup);

describe("About Me component", () => {
  it("renders", () => {
    render(<AboutMe />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<AboutMe />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("contains image, name, title and describtion", () => {
    render(<AboutMe />);
    expect(screen.getByTestId("profilePhoto")).toHaveAttribute(
      "src",
      "profile-photo.jpg"
    );
    expect(screen.getByTestId("profileUserName")).toHaveTextContent(
      "Sanam Ganjian"
    );
    expect(screen.getByTestId("profileUserTitle")).toHaveTextContent(
      "Recently Graduated Full Stack Web Developer"
    );
    expect(screen.getByTestId("profileUserDescription")).toHaveTextContent(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );
  });
});
