import cliUtils from "./cli.mjs";
import fs from "fs";

const readModule = async (filePath) => {
  try {
    let data = "";
    return new Promise((resolve, reject) => {
      const reader = fs.createReadStream(filePath, {
        encoding: "utf-8",
        highWaterMark: 64, // 64 Bytes
      });

      reader.on("data", (chunk) => {
        data += chunk;
      });

      reader.on("end", () => {
        resolve(data);
      });

      reader.on("error", (error) => {
        reject(error);
      });
    });
  } catch (error) {
    cliUtils.error(error);
    throw error;
  }
};

export const compileModule = async (filePath) => {
  const moduleData = await readModule(filePath);

  /* todo */
  // tokenize moduleData
  // generate template from tokens
  // attach scripts and styles
  // return template

  if (moduleData) {
    // todo: check `if` compilation doesn't throw errors
    cliUtils.log("Log: Compiled Module:", filePath);
    return moduleData; // todo: return compiled template here
  } else {
    cliUtils.error("Error: Could not Compile Module:", filePath);
  }
};
