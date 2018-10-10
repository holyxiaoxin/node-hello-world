
module.exports = {
  apps: [{
    name: "node-hello-world",
    script: "/root/node-hello-world/current/index.js",
    instances: 1
  }],
  deploy: {
    // "production" is the environment name
    production: {
      // SSH key path, default to $HOME/.ssh
      key: process.env.HOME+ "/.ssh/id_rsa",
      // SSH user
      user: "root",
      // SSH host
      host: ["128.199.80.90"],
      // SSH options with no command-line flag, see 'man ssh'
      // can be either a single string or an array of strings
      'ssh_options': "StrictHostKeyChecking=no",
      // GIT remote/branch
      ref: "origin/master",
      // GIT remote
      repo: "git@github.com:holyxiaoxin/node-hello-world.git",
      // path in the server
      path: "/root/node-hello-world",
      // Pre-setup command or path to a script on your local machine
      'pre-setup': "ls -la",
      // Post-setup commands or path to a script on the host machine
      // eg: placing configurations in the shared dir etc
      'post-setup': "pm2 start . --name node-hello-world",
      // pre-deploy action
      'pre-deploy-local': "echo 'This is a local executed command'",
      // post-deploy action
      'post-deploy': "pm2 reload node-hello-world",
    },
  }
}
