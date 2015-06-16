import Ember from 'ember';


export default Ember.Route.extend({
  model: function(params) {
    var url = "http://congress.api.sunlightfoundation.com/legislators/locate?zip=" + params.zip + "&apikey=634cb825aab141b7991dca9fbe5c4523";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var peons = [];
      responseJSON.results.forEach(function(peon) {
        peons.push(peon);
      });
      return peons;
    });
  }
});
