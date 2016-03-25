import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('video');
  this.route('what');
  this.route('github');
  this.route('news');
  this.route('roadmap');
  this.route('about');
  this.route('tech');
  this.route('twitter');
  this.route('screen');
  this.route('home');
});

export default Router;
