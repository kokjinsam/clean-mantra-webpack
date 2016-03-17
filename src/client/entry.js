import { FlowRouter } from 'meteor/kadira:flow-router';

import './main';

Meteor.startup(function() {
  FlowRouter.initialize();
});
