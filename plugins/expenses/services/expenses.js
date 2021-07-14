'use strict';
const _ = require('lodash');

/**
 * expenses.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */


module.exports = {

  fetchAll(params, populate) {
    return strapi.query('wydatki', '').find(params, populate);
  },

  fetch(params, populate) {
    return strapi.query('wydatki', '').findOne(params, populate);
  },

};
