const proxy = require("http-proxy-middleware");

module.exports = function(app) {
 app.use(proxy("/api", { target: "http://localhost:4000/" }));
};

// AIzaSyDYKVwKg_HIO_35GAPz0lq1a7mnWv3ECWc