import express from "express";
import morgan from "morgan";
import cors from "cors";
import questionsRouter from "./routes/questions.js"
import topicsRouter from "./routes/topics.js"
const app = express();
//const PORT = 4000;
//  var corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
app.use(cors())
app.use(morgan("dev"));
//app.use(express.static("./public"));
app.use(express.json());
app.use("/api/topics", topicsRouter)
app.use("/api/questions", questionsRouter)
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })

  const PORT = 4000;
  
  app.listen(PORT, function () {
      console.log(`Server is running on port ${PORT}`);
    });

export default app;
