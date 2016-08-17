import Ember from 'ember';

export default Ember.Component.extend({
  isPage1: true,
  isPage2: false,
  isPage3: false,
  isPage4: false,
  isPage5: false,
  isPage6: false,
  isPage7: false,
  isPage8: false,
  isPage9: false,
  isPage10: false,

  actions: {
    togglePage: function(nb) {
      for (var i=1; i<11; i++) {
        this.set('isPage' + i, false);
      }
      this.set('isPage' + nb, true);
    }
  }
});
