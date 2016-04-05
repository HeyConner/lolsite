import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    nameLookup(params) {
      this.transitionTo('results', params.name)
    }
  }
});
