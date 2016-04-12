import Ember from 'ember';

export default Ember.Service.extend({
  getChampions(){
    var url = 'https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0&champData=all';
    return Ember.$.getJSON(url).then(function(response){
      return response.data;
    });
  },
  getSummonerId(summonerName){
    var url = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + summonerName + '?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0&champData=all';
    var self = this;
    return Ember.$.getJSON(url).then(function(response){
      var summonerId =  response[Object.keys(response)[0]].id;
      self.getCurrentMatch(summonerId);
      return summonerId;
    });
  },
  getCurrentMatch(summonerId){
    console.log('hello');
    var url = 'https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/' + summonerId + '?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
    return Ember.$.getJSON(url).then(function(response){
      console.log(response);
      return response;
    })

  }
});
