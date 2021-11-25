import RotationItem from "./RotationItem";
import { render } from "../../../../../utils/test";
import { flight } from '../../../fixtures';

describe("RotationItem", () => {
  it("should match snapshot", () => {
    const { container } = render(<RotationItem flight={flight}/>);

    expect(container).toMatchSnapshot();
  });
});
