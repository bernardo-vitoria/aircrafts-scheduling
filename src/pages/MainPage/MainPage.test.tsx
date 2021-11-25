import MainPage from "./MainPage";
import { render } from "../../utils/test";

describe("Main Page", () => {
  it("should match snapshot", () => {
    const { container } = render(<MainPage />);

    expect(container).toMatchSnapshot();
  });
});
