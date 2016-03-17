import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';

import '../client/main';

Meteor.startup(() => {
  // code to run on server at startup
});

// caching
const timeInMillis = 1000 * 10; // 10 secs
FlowRouter.setPageCacheTimeout(timeInMillis);

// defer script loading
FlowRouter.setDeferScriptLoading(true);
