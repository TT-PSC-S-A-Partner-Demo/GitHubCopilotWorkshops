export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.js?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  testMatch: ["**/tests/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
};
