/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://globalvisionuae.com',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
