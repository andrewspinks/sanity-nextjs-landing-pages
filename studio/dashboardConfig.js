export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fae129ffa080b41f998ce57',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n2h17wu4',
                  apiId: '6f9c4147-c7b3-4452-a0a1-2acada62975d'
                },
                {
                  buildHookId: '5fae12a0445f6440bac283f2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2m1fzr4b',
                  apiId: 'f818a85c-b956-4cc8-8e21-90390cfca8a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andrewspinks/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2m1fzr4b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
