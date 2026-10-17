
import mongoose from "mongoose";

const createDatabaseConnection = (databaseName) => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is missing from server/.env");
  }

  return mongoose.createConnection(uri, {
    dbName: databaseName,
    serverSelectionTimeoutMS: 10000,
  });
};

export default createDatabaseConnection;
