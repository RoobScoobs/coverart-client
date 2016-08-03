import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('album', params.album_id);
  },

  actions: {
    editAlbum (data) {
      this.get('store').findRecord('album', data.id)
           .then(function(album) {
             album.title = data.title;
             album.artist = data.artist;
             album.description = data.description;
             console.log(album);
             return album.save();
           })
           .then(() => this.transitionTo('albums'));
         },

    goToAlbums () {
      this.transitionTo('albums');
    },
  },
});
