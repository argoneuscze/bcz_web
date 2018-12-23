const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BACKEND_URL": prod
    ? "https://localhost:3001"
    : "http://localhost:3001"
};
