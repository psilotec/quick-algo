/**
 * Created by Scott on 9/16/2016.
 */
import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'algos.insert': function() {
        return Algos.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            ownerId: this.userId
        });
    },

    'algos.remove': function(algo) {
        return Algos.remove(algo);
    }
});

export const Algos = new Mongo.Collection('algos');