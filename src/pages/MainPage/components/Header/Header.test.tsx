import Header from "./Header";
import { render } from "../../../../utils/test";

describe("Header", () => {
  it("should match snapshot", () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
