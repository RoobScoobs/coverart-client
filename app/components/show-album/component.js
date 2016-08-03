import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete () {
      this.sendAction('deleteAlbum', this.get('album'));
    },
  },
});
