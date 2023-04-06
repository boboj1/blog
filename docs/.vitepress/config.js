import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  title: "anhe Blog",
  description: "blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: '主页', link: '/' },
      { text: 'UI组件库', link: '/ui-library/' }
    ],

    sidebar: {
      '/ui-library/': [
        {
          text: 'Vue3 组件库',
          items: [
            { text: '自定义图片取色', link: '/ui-library/Vue3/ImgColorPick/' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/taoyuhan894' }
    ]
  }
})
