module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: "./src",
        alias: {
          components: "./src/components",
          screens: "./src/screens",
          actions: "./src/redux/actions",
          assets: "./src/assets",
        },
      },
    ],
    'react-native-reanimated/plugin'
  ],
};