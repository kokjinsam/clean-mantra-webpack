import React from 'react';
import Wrapper from '../hemingway/wrapper';
import Container from '../hemingway/container';
import Group from '../hemingway/group';
import Segment from '../hemingway/segment';

import style from './footer.import.css';

const footerSegments = [
  {
    title: 'Clean Project',
    links: [
      {
        title: 'subscription',
        href: '/subscription',
      }, {
        title: 'store',
        href: '/store',
      }, {
        title: 'recipes',
        href: '/recipes',
      },
    ],
  }, {
    title: 'about',
    links: [
      {
        title: 'about us',
        href: '/about-us',
      }, {
        title: 'blog',
        href: '/blog',
      }, {
        title: 'privacy policy',
        href: '/privacy-policy',
      }, {
        title: 'terms of service',
        href: '/terms-of-service',
      },
    ],
  }, {
    title: 'help',
    links: [
      {
        title: 'getting started',
        href: '/getting-started',
      }, {
        title: 'returns',
        href: 'returns',
      }, {
        title: 'contact us',
        href: 'contact-us',
      },
    ],
  }, {
    title: 'connect',
    links: [
      {
        title: 'facebook',
        icon: 'fa fa-facebook-square',
        href: 'https://facebook.com',
      }, {
        title: 'twitter',
        icon: 'fa fa-twitter-square',
        href: 'https://twitter.com',
      }, {
        title: 'youTube',
        icon: 'fa fa-youtube-square',
        href: 'https://youtube.com',
      },
    ],
  },
];

class Footer extends React.Component {
  copyRightLatestYear() {
    const date = new Date();
    return date.getFullYear();
  }

  renderSegments() {
    return (
      footerSegments.map((segment) => (
          <Segment
            key={segment.title}
            flex
            column
            className={style.segment}
          >
            <span className={style.title}>{segment.title}</span>
            {
              segment.links.map((link) => (
                <a
                  key={link.title}
                  className={style.link} href={link.href}
                >
                  <If condition={link.icon}>
                    <i className={link.icon}></i>
                  </If>

                  {link.title}
                </a>
              ))
            }
          </Segment>
        )
      )
    );
  }

  render() {
    return (
      <Wrapper
        flex
        row
        horizontalCenter
        className={style.wrapper}
      >
        <Container
          type="footer"
          flex
          column
          verticalCenter
          className={style.container}
        >
          <Group
            flex
            row
            className={style.group}
          >
            {this.renderSegments()}
          </Group>
          <Group className={style.copyright}>
            Copyright &#169; {this.copyRightLatestYear()} Clean Project Inc.
          </Group>
        </Container>
      </Wrapper>
    );
  }
}

export default Footer;
