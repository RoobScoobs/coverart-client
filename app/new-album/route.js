import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    createAlbum (data) {
      let album = this.get('store').createRecord('album', data);
      return album.save()
      .then(() => this.transitionTo('albums'));
      // .then(() => this.get('flashMessages').success('New building added'))
      // .catch(() => {
      //   this.get('flashMessages')
      //   .danger('There was a problem. Please try again.');
      // });
    },

    goToAlbums () {
      this.transitionTo('albums');
    }
  }
});
