'use strict';

const { pick } = require('lodash');

/**
 * config.js controller for retrieving configuration
 */

module.exports = {
    getConfig: async (ctx) => {
        const config = strapi.plugins["expenses"].services.config.getConfig()
        ctx.send({
            config: pick(
                config,
                [ 'editor' ]
            )
        })
    }
}