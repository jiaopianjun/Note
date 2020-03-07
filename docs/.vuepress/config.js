module.exports = {
  title: '学习笔记',
  description: 'Let,go',
  head:[
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: './favicon.ico'}]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '分类', link: '/home/' },
      { text: '我的博客', link: 'https://lieme.cn' },
    ],
    sidebar: 'auto',
    displayAllHeaders: true, // 默认值：false
    activeHeaderLinks: true, // 默认值：true
  }
}