import { defineConfig } from 'vitepress';
import pkg from './../../../packages/framework/package.json';

export default defineConfig({
  lang: 'en-US',
  title: 'starflux',
  description: 'a declarative discord.js framework',
  appearance: true,
  themeConfig: {
    nav: [
      {
        text: pkg.version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/saud-alnasser/starflux/blob/main/packages/framework/CHNAGELOG.md',
          },
          {
            text: 'Contributing',
            link: 'https://github.com/saud-alnasser/starflux/blob/main/CONTRIBUTING.md',
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/saud-alnasser/starflux',
      },
    ],
    footer: {
      message: 'Released under the Apache 2.0 License.',
      copyright: 'Copyright © 2023-present saud alnasser',
    },
  },
});
