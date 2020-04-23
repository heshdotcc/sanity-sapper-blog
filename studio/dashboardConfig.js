export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5ea0f9ace0f86b6c469b870b',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-trzpygks',
                  apiId: '47590dbc-75ef-4b45-a82a-2b02d8741d7a'
                },
                {
                  buildHookId: '5ea0f9acf044e83cb29447c5',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-zypuztpj',
                  apiId: '5186725e-c882-4c6d-8dd8-274abaca271e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fchpr/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-zypuztpj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
