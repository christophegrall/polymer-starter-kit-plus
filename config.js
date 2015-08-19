module.exports = {
  // Autoprefixer
  autoprefixer: {
    // https://github.com/postcss/autoprefixer#browsers
    browsers: [
      'Explorer >= 10',
      'ExplorerMobile >= 10',
      'Firefox >= 30',
      'Chrome >= 34',
      'Safari >= 7',
      'Opera >= 23',
      'iOS >= 7',
      'Android >= 4.4',
      'BlackBerry >= 10'
    ]
  },
  // BrowserSync
  browserSync: {
    browser: 'default', // or ["google chrome", "firefox"]
    https: false, // Enable https for localhost development.
    notify: false, // The small pop-over notifications in the browser.
    port: 3000,
    ui: {
      port: 3001
    }
  },
  // Deploy task
  deploy: {
    // Firebase environments
    // Firebase requires Firebase Command Line Tools to be installed and configured.
    // For info on tool: https://www.firebase.com/docs/hosting/command-line-tool.html
    firebase: {
      development: 'polymer-starter-kit-plus-dev', // subdomain
      staging:     'polymer-starter-kit-plus-staging',
      production:  'polymer-starter-kit-plus'
    },
    // Google Cloud Storage
    // GCS requires gsutil to be installed and configured.
    // For info on gsutil: https://cloud.google.com/storage/docs/gsutil
    gcs: {
      acl: { // https://cloud.google.com/storage/docs/access-control
        development: 'public-read',
        staging:     'public-read',
        production:  'public-read'
      },
      bucket: { // https://cloud.google.com/storage/docs/reference-uris
        development: 'dev.example.com',
        staging:     'staging.example.com',
        production:  'www.example.com'
      },
      cacheTTL: {
        production: '315360000', // 10 years
        productionNoCache: '300' // 5 min for files without revision hash
      }
    },
    // Hosting
    hosting: 'firebase' // or gcs
  },
  // PageSpeed Insights
  // Please feel free to use the `nokey` option to try out PageSpeed
  // Insights as part of your build process. For more frequent use,
  // we recommend registering for your own API key. For more info:
  // https://developers.google.com/speed/docs/insights/v1/getting_started
  pageSpeed: {
    key: '', // need uncomment in task
    nokey: true,
    site: 'https://polymer-starter-kit-plus.firebaseapp.com',
    strategy: 'mobile' // or desktop
  }
};
