define("custom:views/dashlets/iframe-extended-dashlet", [
  "views/dashlets/abstract/base",
], function (Dep) {
  return Dep.extend({
    name: "iFrame Extended",
    template: "custom:dashlets/iframe-extended-dashlet",

    afterRender: function () {
      var $iframe = this.$el.find("iframe");

      var url = this.getOption("url");
      var urlParam = this.getOption("urlParam");
      var urlParamVal = this.getOption("urlParamVal");
      var allowFullscreen = this.getOption("allowFullscreen");
      var loading = this.getOption("loading");

      if (url && urlParam != "" && urlParamVal != "None") {
        if (urlParamVal == "User ID") {
          $iframe.attr("src", url + "?" + urlParam + "=" + this.getUser().id);
        }
      } else if (url) {
        $iframe.attr("src", url);
      }

      if (allowFullscreen == "Enabled") {
        $iframe.attr("allow", "fullscreen");
      }

      if (loading == "Eager") {
        $iframe.attr("loading", "eager");
      } else if (loading == "Lazy") {
        $iframe.attr("loading", "lazy");
      }

      this.$el.addClass("no-padding");
      this.$el.css("overflow", "hidden");

      var height = this.$el.height();

      $iframe.css("height", height);
      $iframe.css("width", "100%");
    },

    afterAdding: function () {
      this.getParentView().actionOptions();
    },
  });
});
