import express from 'express';
import mongoose from 'mongoose';
import setupRoutes from './Router';
import bodyParser from 'body-parser';
import cors from 'cors'

const start = async () => {

   try {
      await mongoose.connect('mongodb://127.0.0.1:27017/KEEP-IT', {
      useNewUrlParser: true,
      useUnifiedTopology: true
      });

      console.log("connected to the DB");
      
      const app = express();
      app.use(bodyParser.urlencoded());

      console.log("app is created, lets setup routes");
      setupRoutes(app);

      console.log("App routes added, lets listen on port 4000");
      app.listen(4000);

      app.use(cors());

   }
   
   catch (error) {
      console.error(error);
   }
}

start();