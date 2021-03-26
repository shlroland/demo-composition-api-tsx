// eslint-disable-next-line @typescript-eslint/no-var-requires
const { isVue2 } = require("vue-demi");
console.log(isVue2);
module.exports = {
  presets: [
    [
      "@vue/babel-preset-jsx",
      {
        vModel: false,
        compositionAPI: true,
      },
    ],
    "@vue/cli-plugin-babel/preset",
  ],
  // presets: [
  //   [
  //     "@vue/babel-preset-app",
  //     {
  //       modules: false,
  //       corejs: 3,
  //       jsx: false,
  //       absoluteRuntime: false,
  //       targets: {
  //         browsers: "last 2 versions, IE >= 11",
  //       },
  //     },
  //   ],
  //   isVue2 && [
  //     "@vue/babel-preset-jsx",
  //     {
  //       compositionAPI: true,
  //     },
  //   ],
  // ].filter(Boolean),
};
