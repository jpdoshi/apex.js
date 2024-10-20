import cliUtils from "./cli.mjs";
import { readFile } from "fs/promises";

export const bundleModules = async (compiledTemplate, baseTemplate) => {
  const templateData = await readFile(baseTemplate, "utf-8");

  console.log(templateData); // todo: REMOVE THIS LINE

  /* todo */
  // insert compiledTemplate to baseTemplate
  // minify new template
  // generate html file

  if (templateData) {
    cliUtils.log("Log: Generated bundle files");
  } else {
    cliUtils.error("Error: Could not read template");
  }
};
