const path = require('path')

module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  },
  env:{
    BASE_API_URL:process.env.BASE_API_URL,
  },

  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  }
}
