import Ember from 'ember';

export default Ember.Component.extend({
  champion: Ember.computed('champions', function(){
    var championId = this.get('player').championId;
    var champions = this.get('champions');
    for(var champion in champions){
      if(champions[champion].id === championId)
        return champions[champion];
    }
  })
});
