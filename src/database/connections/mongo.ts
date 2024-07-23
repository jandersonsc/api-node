import mongoose from "mongoose";

const urlConnection = `mongodb://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PASS}@${process.env.DB_MONGO_HOST}:${process.env.DB_MONGO_PORT}/`
mongoose.connect(urlConnection, {
  dbName: process.env.DB_MONGO_NAME
})