import { Meteor } from 'meteor/meteor';
import { Algos } from '../imports/collections/algos';

Meteor.startup(() => {
    Meteor.publish('algos', function() {
        return Algos.find({ ownerId: this.userId });
    });
});
