import next from "next";
import http from "node:http";
import express from "express";

async function createNextApp() {
  const nextApp = next({
    dev: process.env.NODE_ENV !== "production",
  });
  await nextApp.prepare();
  return nextApp;
}

const nextApp = await createNextApp();

const expressApp = express();
const server = http.createServer({}, expressApp);
server.listen(3000, () => {
  console.log("hello");
});
