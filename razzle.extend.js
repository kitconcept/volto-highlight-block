const plugins = (defaultPlugins) => {
  if (!defaultPlugins.includes('scss')) {
    return defaultPlugins.concat(['scss']);
  } else {
    return defaultPlugins;
  }
};
const modify = (config, { target, dev }, webpack) => {
  return config;
};

module.exports = {
  plugins,
  modify,
};
