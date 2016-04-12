import Ember from 'ember';

export default Ember.Route.extend({
  riotApi: Ember.inject.service('riot-api'),
  actions: {
    summonerLookup(params){
      var self = this;
      var summonerId = this.get('riotApi').getSummonerId(params.name);
      summonerId.then(function(){
        self.transitionTo('match', summonerId);
      }, function(){
        console.log(error);
      });
    }
  }
});
