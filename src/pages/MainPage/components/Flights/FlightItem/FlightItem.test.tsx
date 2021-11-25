import FlightItem from "./FlightItem";
import { render } from "../../../../../utils/test";
import { flight } from "../../../fixtures";

describe("FlightItem", () => {
  it("should match snapshot", () => {
    const { container } = render(<FlightItem flight={flight} />);

    expect(container).toMatchSnapshot();
  });
});
