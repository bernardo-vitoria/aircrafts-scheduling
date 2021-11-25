import Loader from "./Loader";
import { render } from "../../utils/test";

describe("Loader compononent", () => {
  it("should match snapshot", () => {
    const { container } = render(<Loader />);

    expect(container).toMatchSnapshot();
  });
});
