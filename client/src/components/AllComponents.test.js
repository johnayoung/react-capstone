import React from "react";
import { shallow, mount } from "enzyme";
import CardContent from "./CardContent";
import Code from "./Code";
import Endpoint from "./Endpoint";
import FieldError from "./FieldError";
import Input from "./Input";
import NavbarItem from "./NavbarItem";
import Parameter from "./Parameter";
import RenderEndpoints from "./RenderEndpoints";
import RenderField from "./RenderField";
import RenderParameters from "./RenderParameters";
import SubmittedUrls from "./SubmittedUrls";

describe("A suite of tests for the App component", () => {
  // Smoke test
  it("should shallow render all components without crashing", () => {
    // Rely on get helper utility
    // shallow(<Endpoint />);
    // shallow(<Parameter />);

    // Rely on ReduxForm
    // shallow(<RenderField />);

    // Rely on mapping function
    // shallow(<SubmittedUrls />);

    shallow(<CardContent />);
    shallow(<Code />);
    shallow(<FieldError />);
    shallow(<Input />);
    shallow(<NavbarItem link="/fake" />);
    shallow(<RenderEndpoints />);
    shallow(<RenderParameters />);
  });

  it("should render without crashing when given array of urls", () => {
    const urls = ["https://www.google.com", "https://www.yahoo.com"];
    shallow(<SubmittedUrls newUrls={urls} />);
  });
});
