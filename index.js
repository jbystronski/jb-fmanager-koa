const fm = require("@jb_fmanager/node-utils");

module.exports = (router, { prefix = "/", errorHandler, maxUploadSize }) => {
  const handle = (err) => {
    console.error(err);
    if (errorHandler) errorHandler(err);
  };

  router.get(prefix + "/map", async (ctx) => {
    ctx.body = await fm.map(ctx.request.query.path).catch(handle);
  });

  router.get(prefix + "/create_folder", async (ctx) => {
    fm.create_folder(ctx.request.query.path, ctx.request.query.name).catch(
      handle
    );

    ctx.body = {};
  });

  router.get(prefix + "/rename", async (ctx) => {
    await fm
      .rename(ctx.request.query.oldPath, ctx.request.query.newPath)
      .catch(handle);

    ctx.body = {};
  });

  router.post(prefix + "/remove", async (ctx) => {
    await fm.remove(ctx.request.body).catch(handle);

    ctx.body = {};
  });

  router.post(prefix + "/copy", async (ctx) => {
    await fm.copy(ctx.request.query.target, ctx.request.body).catch(handle);

    ctx.body = {};
  });

  router.post(prefix + "/move", async (ctx) => {
    await fm.move(ctx.request.query.target, ctx.request.body).catch(handle);

    ctx.body = {};
  });

  router.post(prefix + "/upload", async (ctx) => {
    const uploadLimit = maxUploadSize || ctx.request.query.max_size;

    ctx.body = await fm
      .upload(ctx.req, ctx.res, ctx.request.query.destination, uploadLimit)
      .catch(handle);
  });
};
