const versions = {
  0: ({ components, strict }) => {
    const request = require('./v0/request')
    const response = require('./v0/response')
    return { request: request({ components, strict }), response }
  },
}

module.exports = {
  versions: Object.keys(versions),
  protocol: ({ version }) => versions[version],
}
