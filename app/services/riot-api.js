import Ember from 'ember';

export default Ember.Service.extend({
  getChampion(champion_id){
    var url = 'https://na.api.pvp.net/api/lol/{region}/v1.2/champion?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  }
});
