import Ember from 'ember';

export default Ember.Controller.extend({

  // difeine flag title displaying
  isTitle: false,
  isBottom: false,

  // we want display search field only on list of items pages
  toggleTitle: function() {
    var currentRoute = this.get("currentPath");
    var isTitle = false;
    
    /* Load Search only list pages */
    if (/home/.test(currentRoute)) {
      isTitle = true;
    }

    this.set('isTitle', isTitle);

  }.observes('currentPath'),

  // we want display bottom line only on page with spaces
  toggleBottom: function() {
    var currentRoute = this.get("currentPath");
    var isBottom = false;
    
    /* Load Search only list pages */
    if (/about/.test(currentRoute) ||
        /github/.test(currentRoute) ||
        /roadmap/.test(currentRoute) ||
        /news/.test(currentRoute) ||
        /what/.test(currentRoute)) {
      isBottom = true;
    }

    this.set('isBottom', isBottom);

  }.observes('currentPath'),
});