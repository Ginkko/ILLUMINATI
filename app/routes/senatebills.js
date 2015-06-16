import Ember from 'ember';


export default Ember.Route.extend({
  model: function(params) {
    var url = "http://congress.api.sunlightfoundation.com/upcoming_bills?&chamber=senate&apikey=634cb825aab141b7991dca9fbe5c4523";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var bills = [];
      responseJSON.results.forEach(function(bill) {
        bills.push(bill);
      });
      return bills;
    });
  }
});
