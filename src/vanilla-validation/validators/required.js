export default {
  key: "required",
  isValid: function(element, form) {
    return element.value.length > 0;
  }
};
