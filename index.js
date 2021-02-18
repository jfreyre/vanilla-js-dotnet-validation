import "./style.css";

import {
  initVanillaValidation,
  registerNewValidator
} from "./src/vanilla-validation";

// Uncomment to register a custom validation
registerNewValidator({
  key: "foo",
  isValid: (element, form) => {
    return false;
  }
});

initVanillaValidation();
