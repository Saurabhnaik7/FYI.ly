const Express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

const app = Express();

// CORS
app.use(
  cors({
      allowedHeaders: ["Content-Type"],
      exposedHeaders: ["Content-Type"],
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: true
  })
)

// Body parser
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

// Routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/createURL'));

// Specify ports for webserver
const PORT = process.env.PORT || 5000;

// Listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
