import express from "express";
import morgan from "morgan";
import cors from "cors";
import questionsRouter from "./routes/questions.js";
import topicsRouter from "./routes/topics.js";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/topics", topicsRouter);
app.use("/api/questions", questionsRouter);

const PORT = 4000;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
