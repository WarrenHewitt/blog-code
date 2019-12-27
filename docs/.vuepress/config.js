module.exports = {
    title: "Warren's Blog",
    description: 'blog & note',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], 
    ],
    base: '/blog/',
    themeConfig: {
        sidebarDepth: 0,
        displayAllHeaders: true,
        activeHeaderLinks: true,
        logo: '/logo.png',
        nav: [
            { text: '前端', link: '/fe' },
            { text: '笔记', link: '/note/' },
            { text: 'GitHub', link: 'https://github.com/WarrenHewitt/blog' },
        ],
        sidebar: {
            '/note/': [
                ['examination', '笔试'],
                ['D3', 'D3'],
                ['css', 'css'], 
                ['git', 'git'], 
                ['html', 'html'], 
                ['java', 'java'], 
                ['javascript', 'javascript'], 
                ['mini-programe', 'mini-programe'], 
                ['mysql-mongo', 'mysql-mongo'], 
                ['node', 'node'], 
                ['python', 'python'], 
                ['react', 'react'], 
                ['typescript', 'typescript'], 
                ['vue', 'vue'], 
                ['web-app', 'web-app'], 
            ]
        }

        
        // sidebar: [
        //     {
        //         title: 'react',
        //         path: '/js/',
        //         children: ['/', 'a.md', 'b.md']
        //     }
        // ]
    },
}