'use strict';

/**
 * config.js configuration service
 */

module.exports = {
  getConfig() {
    return strapi.plugins['expenses'].config;
  },
};