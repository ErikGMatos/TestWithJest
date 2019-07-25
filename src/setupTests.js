import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });
