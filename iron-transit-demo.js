Router.configure({
  layoutTemplate: 'MasterLayout'
});
Router.route('/', function () {
  this.render('One')
}, { name: 'one'});
Router.route('/two');

Router.plugin('ironTransit');


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
