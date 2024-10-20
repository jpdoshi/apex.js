import cliUtils from "./cli.mjs";
import { readFile } from "fs/promises";

const readModule = async (filePath) => {
  try {
    const data = await readFile(filePath, "utf-8");
    return data;
  } catch (error) {
    cliUtils.error(error);
  }
};

export const compileModule = async (filePath) => {
  console.log(await readModule(filePath));
  cliUtils.log("compiled", filePath);
};
