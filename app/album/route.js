import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('album', params.album_id);
  },

  actions: {

    deleteAlbum (album) {
      album.destroyRecord()
      .then(() => this.transitionTo('albums'));
    },

    editAlbum (album) {
      this.transitionTo('edit-album', album);
    },
  },
});
