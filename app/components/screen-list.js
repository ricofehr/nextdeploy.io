import Ember from 'ember';

export default Ember.Component.extend({
  descPage1: 'Login page of NextDeploy WebUI',
  descPage2: 'Wall of news displayed just after successfull authentification<br/><br/>',
  descPage3: 'Profile page for edit personal properties of current user',
  descPage4: 'List of projects asociated with current user<br/><br/><br/><br/><br/><br/><br/><br/>',
  descPage5: 'Form who launches a vm with the desired project which current user want test it',
  descPage6: '<br/><br/>At beginning, the vm is on setup status and is adding to the vm list<br/><br/><br/><br/>Once the vm is isntalled, it is on running status',
  descPage7: 'Some technical details about the virtual machine who host the project for current user',
  descPage8: 'This popin list urls for access and test the project on the vm and some useful tools',
  descPage9: 'After a click on the link \'your website\', the drupal8 (cms associated with this project) website is displaying on the browser. We can test our project.',
  descPage10: 'An help popin is displaying from the toolbar menu',
  descPage11: 'Gitlab is used with nextdeploy for manage the git repositories associated to projects<br/><br/><br/>',
  descPage12: 'Each user has a list of his projects on Gitlab<br/><br/><br/><br/><br/>',
  descPage13: 'ndeploy is the cli command software of NextDeploy. Primarily for developpers, it permits to manage projects and vms faster and more efficient',
  descPage14: 'The Android app is at early stage but can launch some vms on his projects',

  currentPage: 1,
  previousPage: false,
  nextPage: 2,
  screenTitle: 'Web Interface',
  screenDesc: 'Login page of NextDeploy WebUI',

  actions: {
    togglePage: function(nb) {
      this.set('currentPage', nb);
      this.set('screenTitle', 'Web Interface');
      this.set('screenDesc', this.get('descPage' + nb));
      this.set('nextPage', parseInt(nb+1));
      this.set('previousPage', parseInt(nb-1));
      if (parseInt(nb) === 1) {
        this.set('previousPage', false);
      }

      if (parseInt(nb) === 13) {
        this.set('screenTitle', 'Cli Software');
      }      

      if (parseInt(nb) === 14) {
        this.set('screenTitle', 'Android App');
        this.set('nextPage', false);
      }
    }
  }
});
