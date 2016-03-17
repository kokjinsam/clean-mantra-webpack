import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/layout.main';
import Hello from './components/hello';

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'hello',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Hello />),
      });
    },
  });
}
