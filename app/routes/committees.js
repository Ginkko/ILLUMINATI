import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = "https://congress.api.sunlightfoundation.com/committees?per_page=all&subcommittee=false&apikey=634cb825aab141b7991dca9fbe5c4523";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var committees = [];
      responseJSON.results.forEach(function(committee) {
        committees.push(committee);
      });
      return committees;
    });
  }
});
