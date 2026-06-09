import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "backend/.env" });

const port = Number(process.env.PORT || 4000);

app.listen(port, () => {
  console.log(`Content Management API running on port ${port}`);
});
