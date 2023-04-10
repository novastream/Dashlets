define("custom:views/dashlets/html-dashlet", [
  "views/dashlets/abstract/base",
], function (Dep) {
  return Dep.extend({
    name: "HTML",
    template: "custom:dashlets/html-dashlet",

    afterRender: function () {
      var $div = this.$el.find("div");

      var content = this.getOption("content");
      if (content) {
        $div.html(content);
      }

      var height = this.$el.height();

      $div.css("height", height);
      $div.css("width", "100%");
    },

    afterAdding: function () {
      this.getParentView().actionOptions();
    },
  });
});
