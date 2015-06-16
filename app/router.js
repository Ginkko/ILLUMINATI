import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('finder', function() {
    this.resource('peon', {path: 'peon/:zip'});
  });
  this.resource('housebills');
  this.resource('senatebills');
  this.resource('recentbills');
  this.resource('committees', function() {
    this.resource('subcommittees', {path: '/:committee_id'});
  });
});

export default Router;
