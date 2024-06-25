import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import sidebar from "./sidebar";
import navbar from "./navbar";

export default defineUserConfig({
  lang: 'zh-CN',
  title: '铧厨预制代码站点！',
  description: '预制代码站点',

  //重置public目录
  public: 'docs/public',
  bundler: viteBundler(),

  theme: defaultTheme(
    {
      navbar,
      sidebar,
    }
  ),

})