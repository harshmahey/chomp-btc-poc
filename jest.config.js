module.exports = {
  "setupFiles": [
    "<rootDir>/test/setEnvVars.js"
  ],
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testRegex": "[.]spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "coverageDirectory": "./coverage",
  "testEnvironment": "node",
  "roots": [
    "<rootDir>/"
  ]
}