import Ember from 'ember';

export default Ember.Component.extend({
  isPage1: true,
  isPage2: false,
  isPage3: false,
  isPage4: false,

  actions: {
    togglePage: function(nb) {
      if (parseInt(nb) === 1) {
        this.set('isPage2', false);
        this.set('isPage3', false);
        this.set('isPage4', false);
        this.set('isPage1', true);
      }

      if (parseInt(nb) === 2) {
        this.set('isPage1', false);
        this.set('isPage3', false);
        this.set('isPage4', false);
        this.set('isPage2', true);
      }

      if (parseInt(nb) === 3) {
        this.set('isPage2', false);
        this.set('isPage1', false);
        this.set('isPage4', false);
        this.set('isPage3', true);
      }

      if (parseInt(nb) === 4) {
        this.set('isPage2', false);
        this.set('isPage3', false);
        this.set('isPage1', false);
        this.set('isPage4', true);
      }
    }
  }
});
