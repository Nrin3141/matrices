module.exports = {
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|react-mathjax-preview)/)",
  ],
  preset: "ts-jest",
  testEnvironment: "node",
};
