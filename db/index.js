import mongoose, { connections } from "mongoose";

const connection = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://maaz:maaz@cluster0.0zdduss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log(connection.connection.host, "mogodb connedted");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connection;
