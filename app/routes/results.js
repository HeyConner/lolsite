import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {


  var champs = 'https://na.api.pvp.net/api/lol/{region}/v1.2/champion?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  var champsID = 'https://na.api.pvp.net/api/lol/{region}/v1.2/champion/{id}?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  var champMastID = 'https://na.api.pvp.net/championmastery/location/{platformId}/player/{playerId}/champion/{championId}?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  var champMastScore = 'https://na.api.pvp.net/championmastery/location/{platformId}/player/{playerId}/score?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  var champMastTop = 'https://na.api.pvp.net/championmastery/location/{platformId}/player/{playerId}/topchampions?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  var champMastChamp =
  'https://na.api.pvp.net/championmastery/location/{platformId}/player/{playerId}/champions?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  var = currentGame = 'https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/{platformId}/{summonerId}?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  var featuredGames = 'https://na.api.pvp.net/observer-mode/rest/featured?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  var recentGames = 'https://na.api.pvp.net/api/lol/{region}/v1.3/game/by-summoner/{summonerId}/recent?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';

  // League of Summoner/Team
  var leagueSumID = 'https://na.api.pvp.net/api/lol/{region}/v2.5/league/by-summoner/{summonerIds}?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  var leagueSumEntry = 'https://na.api.pvp.net/api/lol/{region}/v2.5/league/by-summoner/{summonerIds}/entry?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  var leagueTeamID = 'https://na.api.pvp.net/api/lol/{region}/v2.5/league/by-team/{teamIds}?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  var leagueTeamEntry = 'https://na.api.pvp.net/api/lol/{region}/v2.5/league/by-team/{teamIds}/entry?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  var leagueChallenger = 'https://na.api.pvp.net/api/lol/{region}/v2.5/league/challenger?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  var leagueMaster = 'https://na.api.pvp.net/api/lol/{region}/v2.5/league/master?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';





  var matchList = 'https://na.api.pvp.net/api/lol/{region}/v2.2/matchlist/by-summoner/{summonerId}?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  var summoner = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/{summonerNames}?api_key=766bed47-44ef-404c-a6a9-12a715c98bc0';
  },
});
