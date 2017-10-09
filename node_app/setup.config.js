module.exports = {
  apps :
    [
      {
        name: "Node App",
        script: "server.js",
        watch: true,
        watch_options: {
          usePolling: true
        },
        env: {
            PORT: "8000",
            args: ["--ignore-watch \".git\/ node_modules\""],
        }
      }
    ]
}
