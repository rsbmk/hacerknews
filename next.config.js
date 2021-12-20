module.exports = {
  reactStrictMode: true,
  routes: [
    { handle: 'filesystem' },
    { src: '/(.*)', dest: '/index.html' }
  ]
}
