import cliUtils from "./cli.mjs";
import { readFile } from "fs/promises";

const readModule = async (filePath) => {
  try {
    const data = await readFile(filePath, "utf-8");
    return data;
  } catch (error) {
    cliUtils.error(error);
    return;
  }
};

export const compileModule = async (filePath) => {
  const moduleData = await readModule(filePath);

  console.log(moduleData); // todo: REMOVE THIS LINE

  if (moduleData) {
    cliUtils.log("Log: Compiled", filePath, "Successfully!");
  } else {
    cliUtils.error("Error: Could not Compile Module:", filePath);
  }
};
