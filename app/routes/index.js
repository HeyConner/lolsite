import Ember from 'ember';

export default Ember.Route.extend({
  riotApi: Ember.inject.service('riot-api'),
  model(){
    return Ember.RSVP.hash({
      match: this.store.findRecord('match', 0),
      champions: this.get('riotApi').getChampions()
    })

  }
});
