(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-jquery-widget-addressfield/widget"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-jquery-widget-addressfield/widget"));
  } else {
    root["event-example/widget"] = factory(root["mu-jquery-widget-addressfield/widget"]);
  }
})(this, function (widget) {
  return widget.extend(function ($element, ns) {
    $element.data("mu-jquery-widget-addressfield", {
      json: "https://rawgit.com/tableau-mkt/addressfield.json/v1.1.0/src/addressfield.json",
      fields: {
        country: "#country",
        locality: "#locality-fields",
        localityname: "#city",
        administrativearea: "#state",
        postalcode: "#zip"
      }
    });
  }, {
      "on/addressfield:after": function () {
        this.$element.append("<p>addressfield:after</p>")
      }
    });
});