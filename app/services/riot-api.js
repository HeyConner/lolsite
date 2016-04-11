import Ember from 'ember';

export default Ember.Service.extend({
  getChampions(){
    var url = 'https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0&champData=all';
    return Ember.$.getJSON(url).then(function(response){
      return response.data;
    })
  }
});
