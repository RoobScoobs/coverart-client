import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('album', params.id);
  },

  actions: {
    editAlbum (data) {
      this.get('store').findRecord('album', data.id)
      .then((album) => {
        album.title = data.title;
        album.artist = data.artist;
        album.description = data.description;
        album.save();
      })
       .then(() => this.transitionTo('albums'));
     },

    goToAlbums () {
      this.transitionTo('albums');
    },
  },
});
