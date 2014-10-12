Iron.Router.plugins.ironTransit = function (router, options) {
  router.onBeforeAction(function () {
    console.log("working!");
    this.next();
  });
}
