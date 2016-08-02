import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('albums');
  // this.route('list', { path: '/lists/:list_id' }),
  // this.route('list/edit', { path: '/lists/:list_id/edit' }),
  this.route('new-album');
});

export default Router;
