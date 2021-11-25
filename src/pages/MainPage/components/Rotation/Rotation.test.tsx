import Rotation from "./Rotation";
import { render } from "../../../../utils/test";

describe("Rotation", () => {
  it("should match snapshot", () => {
    const { container } = render(<Rotation />);

    expect(container).toMatchSnapshot();
  });
});
