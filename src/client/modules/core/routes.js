import React from 'react';
import { mount } from 'react-mounter';

import {
  addDefaultTitle,
  addDefaultMetas,
  addDefaultLinks,
  setTitle,
} from 'client/libs/dochead';

import TrioLayout from './components/layout.trio';
import Appbar from './components/appbar';
import Greetings from './components/greetings';
import SliderExample from './components/slider-example';
import Footer from './components/footer';

export default function (injectDeps, { FlowRouter }) {
  const TrioLayoutCtx = injectDeps(TrioLayout);

  FlowRouter.route('/', {
    name: 'hello',
    action() {
      addDefaultTitle();
      addDefaultMetas();
      addDefaultLinks();

      mount(TrioLayoutCtx, {
        header: () => (<Appbar />),
        content: () => (<Greetings />),
        footer: () => (<Footer />),
      });
    },
  });

  FlowRouter.route('/slider', {
    name: 'slider',
    action() {
      setTitle('Slider Example');
      addDefaultMetas();
      addDefaultLinks();

      mount(TrioLayoutCtx, {
        header: () => (<Appbar />),
        content: () => (<SliderExample />),
        footer: () => (<Footer />),
      });
    },
  });
}
