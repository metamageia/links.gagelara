module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run example -- --disableLiveReload --minify",
      startServerReadyPattern: "Web Server is available",
      url: ["https://localhost:8008/lynx/"],
      settings: {
        skipAudits: ["uses-text-compression", "uses-long-cache-ttl"],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
