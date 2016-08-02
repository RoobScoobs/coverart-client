import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    createAlbum (data) {
      let album = this.get('store').createRecord('album', data);
      return album.save()
      .then(() => this.transitionTo('albums'));
    },

    goToAlbums () {
      this.transitionTo('albums');
    },
  },
});
