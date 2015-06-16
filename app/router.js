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
  this.resource('committees');
});

export default Router;
