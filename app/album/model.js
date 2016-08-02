import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  artist: DS.attr('string'),
  user: DS.belongsTo('user'),
  // genre: DS.belongsTo('genre'),
});
