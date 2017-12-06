(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-jquery-widget-selectize/widget"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-jquery-widget-selectize/widget"));
  } else {
    root["extended-example/countries"] = factory(root["mu-jquery-widget-selectize/widget"]);
  }
})(this, function (widget) {
  return widget.extend(function ($element) {
    $element.data("mu-jquery-widget-selectize", {
      options: [
        {
          "text": "Canada",
          "value": "CA"
        },
        {
          "text": "France",
          "value": "FR"
        },
        {
          "text": "Japan",
          "value": "JP"
        },
        {
          "text": "United Kingdom",
          "value": "GB"
        },
        {
          "text": "United States",
          "value": "US"
        },
        {
          "text": "Zimbabwe",
          "value": "ZW"
        }
      ],
      items: ["US"]
    });
  });
});