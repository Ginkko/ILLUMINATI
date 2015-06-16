import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = "https://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id=" + params.committee_id + "&apikey=634cb825aab141b7991dca9fbe5c4523";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var subcommittees = [];
      responseJSON.results.forEach(function(subcommittee) {
        subcommittees.push(subcommittee);
      debugger;
      });
      return subcommittees;
    });
  }
});
