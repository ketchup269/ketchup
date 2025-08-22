import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Codeforces',
    url: `https://codeforces.com/profile/ketchup.26`,
    icon: 'codeforces',
  },
  {
    label: 'Leetcode',
    url: `https://leetcode.com/u/Kethup/`,
    icon: 'leetcode',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
