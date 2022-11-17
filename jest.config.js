module.exports = {
  roots: ["<rootDir>/src/", "<rootDir>/tests/integration/"],
  moduleDirectories: [
    "node_modules",
    "src/test/utils"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": require.resolve("./tests/integration/__mocks__/fileMock.js"),
    "\\.module.css$": "identity-obj-proxy",
    "\\.css$": require.resolve("./tests/integration/__mocks__/styleMock.js"),
    "^src(.*)$": "<rootDir>/src$1"
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  setupFilesAfterEnv: [require.resolve("./tests/integration/setup-tests.js")],
  testEnvironment: "jsdom",
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transform: {
    ".*\\.(vue)$": "@vue/vue3-jest",
    "^.+\\.js$": "babel-jest"
  },
};
