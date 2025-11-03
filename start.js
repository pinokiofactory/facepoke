module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",
        env: {
          DATA_ROOT: "{{cwd}}"
        },
        path: "app",
        message: [
          "python app.py",
        ],
        on: [{
          "event": "/http:\/\/\\S+/",
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        server: "{{input.event[0]}}",
        url: "http://localhost:8080"
      }
    }
  ]
}
