'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('f4-ckeditor')
      .service('myService')
      .getWelcomeMessage();
  },
};
