import socialMediaIcon from '../../../../assets/header/social-media-icon.svg';
import videosIcon from '../../../../assets/header/videos-icon.svg';
import websitesIcon from '../../../../assets/header/websites-icon.svg';

// navbar links - mapped through in Nav.tsx
export const pageLinks = [
  {
    title: 'Home',
    path: '/',
    imgSrc: null,
    imgAlt: null,
    imgCName: null,
  },
  {
    title: 'Videos',
    path: '/videos',
    imgSrc: videosIcon,
    imgAlt: 'Videos icon',
    imgCName: 'videoIcon',
  },
  {
    title: 'Social Media',
    path: '/social-media',
    imgSrc: socialMediaIcon,
    imgAlt: 'Social media icon',
    imgCName: 'socialMediaIcon',
  },
  {
    title: 'Websites',
    path: '/websites',
    imgSrc: websitesIcon,
    imgAlt: 'Websites icon',
    imgCName: 'websitesIcon',
  },
  // {
  //   title: 'Projects',
  //   path: '/projects',
  //   imgSrc: null,
  //   imgAlt: null,
  //   imgCName: null,
  // },
  {
    title: 'Our Team',
    path: '/our-team',
    imgSrc: null,
    imgAlt: null,
    imgCName: null,
  },
  {
    title: 'Get in Touch',
    path: '/contact',
    imgSrc: null,
    imgAlt: null,
    imgCName: null,
  },
  // {
  //   title: 'Blog',
  //   path: '/blog',
  //   imgSrc: null,
  //   imgAlt: null,
  //   imgCName: null,
  // }
]