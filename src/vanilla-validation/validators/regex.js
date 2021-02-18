import "regexp";

export default {
  key: "regex",
  isValid: function(element, form) {
    const pattern = new RegExp(element.dataset.valRegexPattern);
    return element.value.length === 0 || pattern.test(element.value);
  }
};
