/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          port: '',
          pathname: '/150',
        },
        
            {
              protocol: 'https',
              hostname: 'via.placeholder.com',
              port: '',
              pathname: '/500x300',
            },
      
      ]
    },
 
  }

