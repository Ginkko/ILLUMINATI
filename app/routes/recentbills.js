import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = "http://congress.api.sunlightfoundation.com/bills?history.active=true&order=introduced_on&apikey=634cb825aab141b7991dca9fbe5c4523";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var recentBills = [];
      responseJSON.results.forEach(function(bill){
        debugger;
        recentBills.push(bill);
      });
      return recentBills;
    });
  }
});
