const Express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

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

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build' ,'index.html'));
  });
}

// Specify ports for webserver
const PORT = process.env.PORT || 5000;

// Listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
