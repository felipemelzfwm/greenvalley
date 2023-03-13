const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/greenvalley/" : "/"
})

// first branch creation:
// on main branch:
// git subtree pull --prefix vue-ts/dist origin gh-pages

// following updates:
// on main branch:
// git subtree push --prefix vue-ts/dist/ origin gh-pages

