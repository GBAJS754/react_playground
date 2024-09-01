import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

const app = express();

app.use(express.static("dist"));

app.get("*", (req, res) => {
  const appString = renderToString(<App />);

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with React</title>
      </head>
      <body>
        <div id="app">${appString}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
