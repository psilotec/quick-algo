/**
 * Created by Scott on 9/19/2016.
 */
import { expect } from 'chai';
import td from 'testdouble';

import { Algos } from '../../../imports/collections/algos';
import { Mongo } from 'meteor/mongo';

describe("Algos collection", function() {

    let Algos = td.object(["insert"]);
    let exampleInsert;

    before(function() {
        td.replace("../../../imports/collections/algos", { Algos });
        exampleInsert = require("../../../imports/collections/algos").insert;
    });

    after(function() {
       td.reset();
        exampleInsert = null;
    });

    it("creates a createdAt document when New Algo button is clicked", function() {
        const expected = !null;
    exampleInsert(expected);
    td.verify(Algos.insert({ createdAt: expected }));
    });

    it("creates a content document that returns an empty string when New Algo button is clicked", function() {
        const expected = '';
        exampleInsert(expected);
        td.verify(Algos.insert({ content: expected }));
    });

    it("creates a sharedWith document that returns an empty array when New Algo button is clicked", function() {
        const expected = [];
        exampleInsert(expected);
        td.verify(Algos.insert({ sharedWith: expected }));
    });

    it("creates an ownerId document that contains the current user's Id when New Algo button is clicked", function() {
        const expected = !null;
        exampleInsert(expected);
        td.verify(Algos.insert({ ownerId: expected }));
    });

});
