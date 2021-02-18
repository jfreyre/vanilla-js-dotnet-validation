import "regexp";

export default {
  key: "range",
  isValid: function(element, form) {
    let value = element.value.toLowerCase();
    debugger;
    let min = element.getAttribute("data-val-range-min").toLowerCase();
    let max = element.getAttribute("data-val-range-max").toLowerCase();

    var isValid = false;

    if (element.type === "checkbox") {
      isValid =
        element.checked.toString() === min &&
        element.checked.toString() === max;
    } else if (+value > +min && +value < +max) {
      isValid = true;
    }

    return isValid;
  }
};
