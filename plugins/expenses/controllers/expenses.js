'use strict';
const _ = require('lodash');
const expenses = require('../services/expenses');

/**
 * email-designer.js controller
 *
 * @description: A set of functions called "actions" of the `email-designer` plugin.
 */

module.exports = {

  index: async (ctx) => {
    // Add your own logic here.

    // Send 200 `ok`
    ctx.send({
      message: 'ok',
    });
  },
  
  getExpenses: async (ctx) => {
    const expenses = await strapi.plugins['expenses'].services.expenses.fetchAll({user: ctx.state.user });
    ctx.send(expenses);
  },
  
  getExpense: async (ctx) => {
    const expense = await strapi.plugins['expenses'].services.expenses.fetch({ id: ctx.params.expenseId });
    ctx.send(expense);
  },
};