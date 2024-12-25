// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import Autoimport from 'unplugin-auto-import/vite'

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output:"static",
  integrations: [tailwind(), vue({ appEntrypoint:'./src/app.ts' }), mdx()],

  vite:{
    base:'/news-app/',
    plugins:[
      Autoimport({
        imports:["vue","@vueuse/core"],
        dts:'./.astro/import.d.ts'
      }),
    ],
  }
});