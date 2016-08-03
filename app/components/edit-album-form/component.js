import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['form'],

  album: {},

  actions: {
    edit () {
      this.sendAction('editAlbum', this.get('album'));
    },

    reset () {
      this.sendAction('goToAlbums');
    },
  },
});
