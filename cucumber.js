// cucumber.js
module.exports = {
  default: {
    require: ["src/steps/**/*.ts", "src/support/**/*.ts"],
    format: ["@cucumber/pretty-formatter"],
    publishQuiet: true,
    paths: ["src/features/**/*.feature"],
    requireModule: ["ts-node/register"]
  }
};