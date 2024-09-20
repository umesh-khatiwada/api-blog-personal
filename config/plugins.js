    // ~/strapi-aws-s3/backend/config/plugins.js
    
    module.exports = ({ env }) => ({
        upload: {
          config: {
            provider: 'aws-s3',
            providerOptions: {
              accessKeyId: env('AWS_ACCESS_KEY_ID'),
              secretAccessKey: env('AWS_ACCESS_SECRET'),
              region: env('AWS_REGION'),
              params: {
                ACL: env('AWS_ACL', 'public-read'),
                signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
                Bucket: env('AWS_BUCKET'),
              },
            },
            actionOptions: {
              upload: {
                ACL: 'public-read', // or another ACL
              },
              uploadStream: {},
              delete: {},
            },
          },
        },
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        version: '1.0.0',
        title: 'DOCUMENTATION',
        description: '',
        termsOfService: 'YOUR_TERMS_OF_SERVICE_URL',
        contact: {
          name: 'TEAM',
          email: 'contact-email@something.io',
          url: 'mywebsite.io'
        },
        license: {
          name: 'Apache 2.0',
          url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        },
      },
      'x-strapi-config': {
        // Leave empty to ignore plugins during generation
        plugins: [ 'upload', 'users-permissions'],
        path: '/documentation',
      },
      servers: [{ url: 'https://api-blog.umeshkhatiwada.com.np/api', description: 'Development server' }],
      externalDocs: {
        description: 'Find out more',
        url: 'https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html'
      },
      security: [ { bearerAuth: [] } ]
    },
  },
  });
