/** Used only to build docs CSS. The preset is the consumable package. */
module.exports = {
  presets: [require('./preset.js')],
  content: ['./docs/**/*.html', './docs/**/*.js'],
};
