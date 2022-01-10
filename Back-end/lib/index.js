"use strict";

require("core-js/modules/es.promise.js");

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Router = _interopRequireDefault(require("./Router"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const start = async () => {
  try {
    await _mongoose.default.connect('mongodb://127.0.0.1:27017/KEEP-IT', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connected to the DB");
    const app = (0, _express.default)();
    app.use(_bodyParser.default.urlencoded());
    console.log("app is created, lets setup routes");
    (0, _Router.default)(app);
    console.log("App routes added, lets listen on port 4000");
    app.listen(4000);
    app.use(_cors.default);
  } catch (error) {
    console.error(error);
  }
};

start();