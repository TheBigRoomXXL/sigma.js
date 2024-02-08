import path from "path";

import screenshotsSuite from "../suites/screenshots";
import { startExampleServer, takeScreenshots } from "../utils";

async function exec() {
  try {
    const server = await startExampleServer();
    await takeScreenshots(screenshotsSuite, path.resolve(`./test/e2e/screenshots`), 8000, "valid");
    server.stopCallback(() => {
      process.exit();
    });
  } catch (e) {
    console.log("Error on generating screenshots", e);
  } finally {
    process.exit();
  }
}

exec();
