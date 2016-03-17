//import * as Collections from 'lib/collections';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Tracker } from 'meteor/tracker';
import { createStore } from 'redux';

export default function ({ reducer }) {
  return {
    Meteor,
    FlowRouter,
    Tracker,
    Store: createStore(reducer),
  };
}
