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
    }
});

export const Algos = new Mongo.Collection('algos');