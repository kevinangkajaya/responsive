import React from "react";
import { render } from "@testing-library/react";

import Responsive from "./Responsive";

describe("Responsive", () => {
    test("renders the Responsive component", () => {
        render(<Responsive desktop={<div>Desktop</div>} mobile={<div>Mobile</div>} />);
    });
});