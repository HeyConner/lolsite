import Ember from 'ember';

export default Ember.Route.extend({
  riotApi: Ember.inject.service('riot-api'),
  model(params){
    return Ember.RSVP.hash({
      match: this.get('riotApi').getCurrentMatch(params.match_id),
      champions: this.get('riotApi').getChampions()
    })

  }
});
