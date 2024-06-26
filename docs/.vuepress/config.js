import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import sidebar from "./sidebar";
import navbar from "./navbar";
import {backToTopPlugin} from '@vuepress/plugin-back-to-top'
import {copyCodePlugin} from '@vuepress/plugin-copy-code'
import {nprogressPlugin} from '@vuepress/plugin-nprogress'
import {searchPlugin} from '@vuepress/plugin-search'
import {commentPlugin} from '@vuepress/plugin-comment'
export default defineUserConfig({
  lang: 'zh-CN',
  title: '铧厨预制代码站点！',
  description: '预制代码站点',
  //重置public目录
  public: 'docs/public',
  //打包工具
  bundler: viteBundler(),

  //多语言配置
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  //主题配置
  theme: defaultTheme({
    navbar,
    sidebar,
    sidebarType: 'right',
    repo: 'https://gitee.com/zyh0525/yh-blog',
    docsRepo: 'https://gitee.com/zyh0525/yh-blog',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    // 以下为可选的编辑链接语言选项
    locales: {
      '/': {
        selectLanguageText: '简体中文',
      }
    },
    editLinkText: '编辑此页',
    pageNavbarLabel: '页面导航',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    prev: '上一篇',
    next: '下一篇',
  }),
  //插件
  plugins: [
    //进度条
    nprogressPlugin(),
    //返回顶部
    backToTopPlugin(),
    // 代码块拷贝
    copyCodePlugin({
      showInMobile: true,
    }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'search',
        }
      },
      // 排除首页
      isSearchable: (page) => page.path !== '/',
    }),
    commentPlugin({
      comment:true,
      provider: 'Giscus',// Artalk | Giscus | Waline | Twikoo
      repo:'Nuyoah0525/yh-blog',
      repoId:'R_kgDOMOQ81w',
      category:'General',
      clientId:'DIC_kwDOMOQ8184CgY5R',
    })
  ],
})