module.exports = {
  apps: [
    {
      name: "next-app",
      script: "npm",
      args: "start",
      cwd: __dirname, // ensure it runs from your project root
      env: {
        NODE_ENV: "production",
        PORT: 4000,
      },
      // optional:
      // instances: 1,          // or 'max' (cluster)
      // exec_mode: 'fork',     // or 'cluster'
      // max_memory_restart: '512M'
    },
  ],
};
