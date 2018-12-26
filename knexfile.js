const development = {
  client: "sqlite3",
  migrations: {
    directory: "./db/migrations"
  },
  connection: {
    filename: "./db/dev.sqlite3"
  }
};

const production = {
  ...development,
  connection: {
    filename: "./db/prod.sqlite3"
  }
};

module.exports = {
  development: development,
  production: production
};
