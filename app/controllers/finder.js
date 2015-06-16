import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function() {
      this.transitionToRoute('peon', this.get('zip'));
    }
  }
});
