const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { MONGO_URI } = require("./config");

const propertiesRoutes = require("./routes/properties");

const app = express();

app.use(cors());
app.use(express.json());

//Connect to MONGODB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo connected"))
  .catch((error) => console.log(error));

app.use("/api/properties", propertiesRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
