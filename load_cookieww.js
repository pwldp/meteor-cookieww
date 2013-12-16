if (Meteor.isClient) {
  Meteor.startup(function () {
    $("body").CookieWindow();
  });
}
