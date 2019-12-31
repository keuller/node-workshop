module.exports = {
    transform: {
        "^.+\\.js$": "babel-jest",
    },
    moduleFileExtensions: [ "js", "cjs" ],
    testPathIgnorePatterns: ["node_modules"],
    bail: false,
    transformIgnorePatterns: ["node_modules"]
}
