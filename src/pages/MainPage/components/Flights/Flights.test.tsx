import Flights from "./Flights";
import { render } from "../../../../utils/test";
import { flights } from "../../fixtures";

describe("Flights", () => {
  it("should match snapshot", () => {
    const { container } = render(<Flights flights={flights} />);

    expect(container).toMatchSnapshot();
  });
});
