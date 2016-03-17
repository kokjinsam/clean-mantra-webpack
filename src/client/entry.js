import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';

import './main';

Meteor.startup(() => {
  FlowRouter.initialize();
});
