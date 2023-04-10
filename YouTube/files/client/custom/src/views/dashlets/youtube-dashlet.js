define("custom:views/dashlets/youtube-dashlet", [
  "views/dashlets/abstract/base",
], function (Dep) {
  return Dep.extend({
    name: "YouTube",
    template: "custom:dashlets/youtube-dashlet",

    afterRender: function () {
      var $iframe = this.$el.find("iframe");

      var url = this.getOption("url");
      if (url) {
        $iframe.attr("src", url);
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
