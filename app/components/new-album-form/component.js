import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['form'],

  album: {},

  actions: {
   submit () {
     this.sendAction('createAlbum', this.get('album'));
     this.sendAction('goToAlbums');
   },

   reset () {
     this.set('album', {});
     this.sendAction('goToAlbums');
   },
 },
});
