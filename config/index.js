module.exports = {
  app: {
    port: process.env.APP_PORT || 3000,

    db: {
      user: process.env.DB_USER || "postgres",
      pass: process.env.DB_PASSWORD || "postgres",
      name: process.env.TEST_MODE ? process.env.TEST_DB_NAME : process.env.DB_NAME || "votingApp",
      options: {
        host: process.env.DB_HOST || "127.0.0.1",
        port: parseInt(process.env.DB_PORT) || 5432,
        dialect: process.env.DB_TYPE || "postgres",
        // pool
        max_connections: parseInt(process.env.DB_MAX_CONNECTIONS, 10) || 25,
        min_connections: parseInt(process.env.DB_MIN_CONNECTIONS, 10) || 1,
        connection_idle_time:
          parseInt(process.env.DB_CONNECTION_IDLE_TIME, 10) || 10000
      }
    },
    jwt: {
      secret: process.env.APP_JWT_SECRET || "jwt_secret",
      expires_in: process.env.APP_JWT_EXPIRES_IN || "1h"
    }
  }
};
