const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
module.exports = phase => {
  return {
    env: {
      apiEndpoint:
        phase === PHASE_DEVELOPMENT_SERVER
          ? 'http://localhost:1337'
          : 'https://guitarlab-project.herokuapp.com',
    },
    reactStrictMode: true,
    images: {
      domains: ['res.cloudinary.com'],
    },
  }
}
