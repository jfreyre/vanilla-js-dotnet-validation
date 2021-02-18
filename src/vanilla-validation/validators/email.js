import "regexp";

export default {
  key: "email",
  isValid: function(element, form) {
    let value = element.value.toLowerCase();

    if (value.length > 0) {
      // TODO: Real basic email validation. Could be improved
      const pattern = /[^@]+@[^\.]+\..+/;
      let regex = new RegExp(pattern);

      return regex.test(value);
    }
    return true;
  }
};
