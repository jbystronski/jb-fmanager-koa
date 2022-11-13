<p><a href="https://github.com/jbystronski/jb-fmanager-react">@jb_fmanager/react</a> setup for koa</p>

<h4>Installation</h4>

<p>Include the routes and the utility package <a href="https://github.com/jbystronski/jb-fmanager-node-utils">@jb_fmanager/node-utils</a></p>

```bash

npm i @jb_fmanager/koa @jb_fmanager/node-utils

yarn add @jb_fmanager/koa @jb_fmanager/node-utils

```

<h4>Options</h4>

<p style="font-weight: bold;">root</p>
<p>Root folder for the frontend component</p>
<p style="font-weight: bold;">prefix</p>
<p>Must match the namespace provided to the manager, default is "api/fm".</p>
<p style="font-weight: bold;">maxUploadSize</p><p>If you want to override the value provided to the manager. Accepts bytes, ie 5242880 (5mb).</p>
<p style="font-weight: bold;">errorHandler</p>
<p>To handle errors your way, optional</p>

<h4>Example use</h4>

```js
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const koaStatic = require("koa-static");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

const router = new Router();

// passing the router as first argument

require("@jb_fmanager/koa")(router, {
  root: "public",
  prefix: "/api/fm",
  errorHandler: undefined,
});

app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(koaStatic("./public"));

app.listen(4000, () => console.log("listening on port 4000"));
```
