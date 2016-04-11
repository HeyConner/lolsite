import DS from 'ember-data';

export default DS.Model.extend({
  mapId: DS.attr(),
  matchCreation: DS.attr(),
  matchDuration: DS.attr(),
  matchId: DS.attr(),
  matchType: DS.attr(),
  matchVersion: DS.attr(),
  participantsIdentities: DS.attr(),
  participants: DS.attr(),
  platformId: DS.attr(),
  queueType: DS.attr(),
  region: DS.attr(),
  season: DS.attr(),
  teams: DS.attr(),
  timeline: DS.attr()
});
