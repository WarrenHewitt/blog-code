module.exports = {
    title: "Warren's",
    description: 'blog & note',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], 
    ],
    base: '/blog/',
    configureWebpack: {
        resolve: {
          alias: {
            '@': './public'
          }
        }
    },
    themeConfig: {
        sidebarDepth: 0,
        displayAllHeaders: true,
        activeHeaderLinks: true,
        logo: '/logo.png',
        nav: [
            { text: '前端', link: '/fe/' },
            { text: '后端', link: '/be/' },
            { text: '笔记', link: '/note/' },
            { text: '其它', link: '/other/' },
            { text: 'GitHub', link: 'https://github.com/WarrenHewitt' },
        ],
        sidebar: {
            /** @des 前端 */
            '/fe/': [
                { 
                    title: 'react',
                    collapsable: false,
                    children: [['/fe/react/rn-app', 'react-native入门']]
                },
                { 
                    title: 'vue',
                    collapsable: false,
                    children: [
                        ['/fe/vue/vue-sass-config', 'vue配置sass'],
                        ['/fe/vue/iview-table-edit', 'iview可编辑表格'],
                        ['/fe/vue/iview-ud-table-header', 'iview自定义多级表头'],
                    ]
                },
                { 
                    title: '实践示例', 
                    collapsable: false,
                    children: [
                        ['/fe/other/dragDropPreview', '拖拽与拖拽文件上传'],
                        ['/fe/other/requestAnimationFrame', 'requestAnimationFrame 兼容'],
                        ['/fe/other/toastAndLoading', '页面弹窗toast和加载loading'],
                        ['/fe/other/vertical-roll', '元素内容垂直循环滚动'],
                        ['/fe/other/cssHeart', '用css 实现心形'],
                        ['/fe/other/weChatGetUserInfo', '获取微信用户信息'],
                        ['/fe/other/weChatShare', '微信分享'],
                    ]
                },
                { 
                    title: '探索原理实践', 
                    collapsable: false,
                    children: [
                        ['/fe/other/designPattern', '设计模式的理解与实现'],
                        ['/fe/other/generator', '生成器'],
                        ['/fe/other/html5device', 'HTML5 设备访问'],
                        ['/fe/other/indexedDB', 'indexedDB'],
                        ['/fe/other/singlePageRoute', 'hash或history实现单页面路由']
                    ]
                },
                { 
                    title: '工具方法', 
                    collapsable: false,
                    children: [
                        ['/fe/tools/arrayFun', '数组相关'],
                        ['/fe/tools/debounceThrottle', '防抖/节流'],
                        ['/fe/tools/publicFn', '常用工具函数'],
                        ['/fe/tools/regexpRules', '正则表达式'],
                    ]
                },
            ],

            /** @des 后端 */
            '/be/': [
                { 
                    title: 'node', 
                    collapsable: false,
                    children: [
                        ['/be/node/access-origin', '跨域处理'],
                        ['/be/node/eggStart', 'egg入门'],
                        ['/be/node/generatorTemplate', '初始化前端模板'],
                        ['/be/node/koaServerAddress', 'koa2图片上传'],
                        ['/be/node/moveFileOrfolder', '删除-复制文件、文件夹'],
                        ['/be/node/setAutoIp', '获取本机IP地址'],
                    ]
                },
                { 
                    title: 'python', 
                    collapsable: false,
                    children: [
                        ['/be/python/scrapy-start', 'scrapy入门']
                    ]
                },
                { 
                    title: '脚本', 
                    collapsable: false,
                    children: [
                        ['/be/batSh', '批处理与 shell 语法']
                    ]
                }
            ],

            /** @des 笔记 */
            '/note/': [
                { 
                    title: '所有', 
                    collapsable: false,
                    children: [
                        ['examination', '笔试'],
                        ['javascript', 'javascript'], 
                        ['html', 'html'], 
                        ['css', 'css'], 
                        ['react', 'react'], 
                        ['vue', 'vue'], 
                        ['web-app', 'web-app'], 
                        ['typescript', 'typescript'], 
                        ['mini-programe', 'mini-programe'], 
                        ['node', 'node'], 
                        ['java', 'java'], 
                        ['python', 'python'], 
                        ['mysql-mongo', 'mysql-mongo'], 
                        ['git', 'git'], 
                        ['D3', 'D3'],
                    ]
                },
            ],

            '/other/': [
                { 
                    title: '报错信息统计', 
                    collapsable: false,
                    children: [
                        ['/other/errorMessage', '统计信息'],
                    ]
                },
                { 
                    title: '软件操作相关', 
                    collapsable: false,
                    children: [
                        ['/other/win-cmd', 'windows系统相关操作'],
                        ['/other/softwareUsage', '常用软件操作'],
                        ['/other/charles-proxy-phone', 'charles抓包手机数据'],
                        ['/other/psISE', 'powershell ISE，集成git命令'],
                    ]
                },
                { 
                    title: 'hexo搭建博客', 
                    collapsable: false,
                    children: [
                        ['/other/githubHexo', '搭建步骤'],
                    ]
                },
                { 
                    title: '算法', 
                    collapsable: false,
                    children: [
                        ['/other/algorithm/algorithm', '算法实践'],
                    ]
                },
                { 
                    title: 'codepen', 
                    collapsable: false,
                    children: [
                        ['/other/codepen', 'codepen 实例'],
                    ]
                }
            ]
        }
    },

    plugins: ['@vuepress/back-to-top']
}