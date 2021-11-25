import AircraftItem from "./AircraftItem";
import { render } from "../../../../../utils/test";
import { aircraft } from "../../../fixtures";

describe("AircraftItem", () => {
  it("should match snapshot", () => {
    const { container } = render(<AircraftItem aircraft ={aircraft} />);

    expect(container).toMatchSnapshot();
  });
});
