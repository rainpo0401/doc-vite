import { defineConfig } from 'vitepress'
import nav from './navbar'
import sidebar from './sidebar'

type ThemeableImage =
  | string
  | { src: string; alt?: string }
  | { light: string; dark: string; alt?: string }

export default defineConfig({
  // 这里在head里面可以设置meta标签,利于seo搜索
  head: [
    ['link', { rel: 'icon', href: './public/favicon.ico' }],
    ["meta", { name: "referrer", content: "no-referrer" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "comfyui,comfyui节点,comfyui文档,comfyuiAPI,SD,AI,AIGC",
      },
    ],
  ],
  title: "AI窝子-comfyui节点文档库",
  description: "分享与comfyui有关的文档",
  srcDir:"./docs/",
  themeConfig: {
    siteTitle: 'AI窝子文档库',
    logo:{
      light:'/logo-l.png', dark:'/logo-d.png', alt:'logo'
    },
    nav,
    sidebar,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'slack', link: 'https://work.weixin.qq.com/kfid/kfc72442e5826335a06' },
    ],
    footer: {
      message: '<a href="https://www.aiwozi.com">aiwozi.com</a>',
      copyright: 'Copyright © 2024 - BY rainpo'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },
  ignoreDeadLinks: true, //当设置为 true 时，VitePress 不会因为死链而导致构建失败。
  // 排除不打包的目录
  srcExclude: ["./source-doc/**", 'README.md', 'Dockerfile', 'nginx.conf', '.dockerignore']
})
