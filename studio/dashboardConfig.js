export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '624a2408a5c73d4b7248da27',
                  title: 'Sanity Studio',
                  name: 'nextnew-studio',
                  apiId: 'af89683c-d7e4-4252-8f6e-c205452b9edf'
                },
                {
                  buildHookId: '624a2408bbf5b168655544f6',
                  title: 'Landing pages Website',
                  name: 'nextnew',
                  apiId: 'e6e2756d-c162-414b-a234-3afa2aebc8b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/persephonepunch/-nextnew',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://nextnew.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
