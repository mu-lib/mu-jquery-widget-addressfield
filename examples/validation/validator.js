(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-jquery-widget-validation/widget"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-jquery-widget-validation/widget"));
  } else {
    root["validation-example/validator"] = factory(root["mu-jquery-widget-validation/widget"]);
  }
})(this, function (widget) {
  return widget.extend({
    "on/submit": function ($event) {
      $event.preventDefault();
      this.$element.append("<p>submit</p>");
    }
  });
});