const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");
var cookieParser = require("cookie-parser");
const path = require("path");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");

//adding socket.io configuration
// const http = require("http");
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

const errorHandler = require("./middleware/error");

//import routes
const authRoutes = require("./routes/authRoutes");
const postRoute = require("./routes/postRoute");

//database connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

//MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: true,
  })
);
app.use(cookieParser());
// app.use(
//   cors({
//     origin: [
//       "https://world-disaster-center.vercel.app",
//       process.env.FRONTEND,
//       "http://localhost:5173",
//       "https://world-disaster-center.vercel.app",
//       "https://world-disaster-center-oltqguv3b-josephbakulikiras-projects.vercel.app",
//       "https://world-disaster-center-git-master-josephbakulikiras-projects.vercel.app",
//       "https://world-disaster-center-oltqguv3b-josephbakulikiras-projects.vercel.app",
//     ],
//     credentials: true,
//   })
// );

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

// console.log(process.env.FRONTEND)
// app.use(cors(
//   {
//     credentials: true,
//     origin: ["http://localhost:5173", process.env.FRONTEND],
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
//   }
// ));

const corsConfig = {
  origin: ["http://localhost:5173", process.env.FRONTEND, "https://www.worlddisastercenter.org"],
  credentials: true
};

app.use(cors(corsConfig));

// app.use(allowCors())
// allowCors();
// app.use(
//   cors()
// );
// prevent SQL injection
app.use(mongoSanitize());
// adding security headers
// app.use(
//   helmet.contentSecurityPolicy({
//     useDefaults: true,
//     directives: {
//       "img-src": ["'self'", "https: data:"],
//     },
//   })
// );

// app.use(cors({origin: "*", credentials: true}));
// app.use(function (req, res, next) {
//   //Enabling CORS
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
//     next();
//   });
// prevent Cross-site Scripting XSS
// app.use(xss());
//limit queries per 15mn
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);
//HTTP Param Pollution
app.use(hpp());

//ROUTES MIDDLEWARE
app.use("/api/users", authRoutes);
app.use("/api/posts", postRoute);

__dirname = path.resolve();

app.get("/", (req, res) => {
  res.send("API is running....");
});

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   )
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running....')
//   })
// }

//error middleware
app.use(errorHandler);

//port
const port = process.env.PORT || 9000;

// app.listen(port, () => {
//     console.log(` Server running on port ${port}`);
// })
// io.on("connection", (socket) => {
//   //console.log('a user connected', socket.id);
//   socket.on("comment", (msg) => {
//     // console.log('new comment received', msg);
//     io.emit("new-comment", msg);
//   });
// });

// exports.io = io

app.listen(port, () => {
  console.log(` Server running on port ${port}`);
});
