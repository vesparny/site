const dynamic = require('next/dynamic').default

module.exports = {
  meta: [
    {
      author: 'Alessandro Arnodo',
      email: 'alessandro@arnodo.net',
      permalink: '/writing/2015/morpheus-is-moving-forward',
      title: 'Morpheus is moving forward',
      date: '2015-01-16 15:00:00',
      description: 'Morpheus is moving forward'
    },
    {
      author: 'Alessandro Arnodo',
      email: 'alessandro@arnodo.net',
      permalink: '/writing/2015/introducing-morpheus',
      title: 'Introducing morpheus',
      date: '2015-01-07 15:00:00',
      description:
        'A gentle introduction to Morpheus, the very first isomorphic web publishing platform'
    }
  ],
  imports: {
    '/writing/2015/introducing-morpheus': dynamic(
      import('../posts/2015/introducing-morpheus.mdx'),
      {
        loading: () => null
      }
    ),
    '/writing/2015/morpheus-is-moving-forward': dynamic(
      import('../posts/2015/morpheus-is-moving-forward.mdx'),
      {
        loading: () => null
      }
    )
  }
}
