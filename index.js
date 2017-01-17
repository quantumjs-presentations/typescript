import React from "react";
import { render } from "react-dom";

import "prismjs"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-jsx"

import Presentation from "./presentation";

render(<Presentation/>, document.getElementById("root"));
