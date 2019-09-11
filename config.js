exports.get = function get(env) {
  return config[env] || config.default;
};