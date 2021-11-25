import Page from "./Page";
import { render } from "../../utils/test";

describe("Page component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });
});
