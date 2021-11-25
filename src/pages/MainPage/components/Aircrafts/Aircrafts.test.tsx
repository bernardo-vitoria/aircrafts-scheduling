import Aircrafts from "./Aircrafts";
import { render } from "../../../../utils/test";
import { aircrafts } from "../../fixtures";

describe("Aircrafts", () => {
  it("should match snapshot", () => {
    const { container } = render(<Aircrafts aircrafts ={aircrafts} />);

    expect(container).toMatchSnapshot();
  });
});
