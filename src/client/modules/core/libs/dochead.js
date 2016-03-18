import { DocHead } from 'meteor/kadira:dochead';

/* Title */
const defaultTitle = 'Clean Project';

/* Meta */
const defaultMetas = [
  {
    charset: 'utf-8',
  }, {
    name: 'description',
    content: 'Clean Project',
  }, {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1',
  },
];

/* Link */
const defaultLinks = [
  {
    rel: 'icon',
    href: '/favicon32x32.ico?v=2',
    type: 'image/x-icon',
  }, {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto',
  }, {
    rel: 'stylesheet',
    href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css',
  },
];

export function setTitle(title) {
  if (typeof title === 'string' || title instanceof String) {
    DocHead.setTitle(title);
    return;
  }

  throw new Error('Title has to be a string');
}

export function addMeta(meta) {
  if (meta instanceof Object) {
    DocHead.addMeta(meta);
    return;
  }

  throw new Error('Meta has to be an object');
}

export function addLink(link) {
  if (link instanceof Object) {
    DocHead.addLink(link);
    return;
  }

  throw new Error('Link has to be an object');
}

export function addMetas(metas) {
  if (metas instanceof Array) {
    metas.forEach(meta => {
      addMeta(meta);
    });
    return;
  }

  throw new Error('Metas have to in an array');
}

export function addLinks(links) {
  if (links instanceof Array) {
    links.forEach(link => {
      addLink(link);
    });
    return;
  }

  throw new Error('Links have to in an array');
}

export function addDefaultTitle() {
  setTitle(defaultTitle);
}

export function addDefaultMetas() {
  addMetas(defaultMetas);
}

export function addDefaultLinks() {
  addLinks(defaultLinks);
}
