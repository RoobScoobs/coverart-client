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
  this.route('album', { path: '/albums/:id' });
  this.route('new-album');
  this.route('edit-album', { path: '/edit-album/:id' });
  // this.route('list/edit', { path: '/lists/:list_id/edit' }),
});

export default Router;
