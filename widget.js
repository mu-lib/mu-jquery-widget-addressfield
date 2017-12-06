(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-jquery-widget/widget"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-jquery-widget/widget"));
  } else {
    root["mu-jquery-widget-addressfield/widget"] = factory(root["mu-jquery-widget/widget"]);
  }
})(this, function (widget) {
  return widget.extend({
    "on/initialize": function () {
      var $element = this.$element;
      $element.addressfield($element.data("mu-jquery-widget-addressfield"));
    }
  });
});