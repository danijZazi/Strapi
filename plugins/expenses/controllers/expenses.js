'use strict';

/**
 * expenses.js controller
 *
 * @description: A set of functions called "actions" of the `expenses` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    ctx.send({
      message: 'ok'
    });
  }
};
