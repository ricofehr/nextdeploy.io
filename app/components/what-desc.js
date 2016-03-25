import Ember from 'ember';

export default Ember.Component.extend({
  isPage1: true,
  isPage2: false,

  actions: {
    togglePage: function() {
      if (this.get('isPage1')) {
        this.set('isPage1', false);
        this.set('isPage2', true);
      } else {
        this.set('isPage2', false);
        this.set('isPage1', true);
      }
    }
  }
});
