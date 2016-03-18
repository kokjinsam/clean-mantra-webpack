import { createApp } from 'mantra-core';
import { combineReducers } from 'redux';
import initContext from './configs/context';

// import app style
import './configs/styles';

// modules
import coreModule from './modules/core';

const coreReducers = coreModule.reducers;

const reducer = combineReducers({
  ...coreReducers,
});

// init context
const context = initContext({ reducer });

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();
