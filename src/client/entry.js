import { FlowRouter } from 'meteor/kadira:flow-router-ssr';

import './main';

Meteor.startup(function() {
  FlowRouter.initialize();
});
