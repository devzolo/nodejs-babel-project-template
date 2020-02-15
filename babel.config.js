module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  sourceMaps: 'inline',
  retainLines: true,
};
