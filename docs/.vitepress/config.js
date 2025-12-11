import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Notes4physics/',
  title: "我的读书笔记",
  description: "记录阅读的点点滴滴",
  markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '我的书架', link: '/books/books_notes' },
      { text: '关于我', link: '/books/intro' }
    ],

    sidebar: [
      {
        text: '阅读列表',
        items: [
          { text: '介绍', link: '/books/intro' },
          { text: '读书笔记', link: '/books/books_notes' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
