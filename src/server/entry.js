import { Meteor } from 'meteor/meteor';

// If you want to enable SSR
// uncomment the following
/*
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import '../client/main';
// caching
const timeInMillis = 1000 * 10; // 10 secs
FlowRouter.setPageCacheTimeout(timeInMillis);

// defer script loading
FlowRouter.setDeferScriptLoading(true);
*/

Meteor.startup(() => {
  // code to run on server at startup
});
