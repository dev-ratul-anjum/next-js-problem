// server.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 1500;

if(process.env.NODE_ENV === "production"){
      app.set("trust proxy", 1);
}

app.use(
  cors({
    origin: process.env.FRONTEND_REDIRECT_URL,
    credentials: true,
  })
);

app.use(cookieParser("cookie-secret"))

app.get("/set-cookie", (req, res) => {
  // JSON response
  const data = { message: "Cookie has been set successfully!" };

    res.cookie("myCookie", "cookieValue", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    signed: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
  });

  return res.redirect(process.env.FRONTEND_REDIRECT_URL);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
