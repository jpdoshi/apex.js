import { copyFile, readFile, writeFile } from "fs/promises";

import cliUtils from "./cli.mjs";
import config from "../apex.config.js";
import CleanCSS from "clean-css";

export const bundleModules = async () => {
  const { baseDir } = config;

  /* todo */
  // generate minifed client script

  // minify global CSS
  const globalStyles = (
    await readFile(baseDir + "global.styles.css", "utf-8")
  ).toString();

  const minifedStyles = new CleanCSS().minify(globalStyles).styles;
  await writeFile(baseDir + "dist/global.styles.css", minifedStyles);

  cliUtils.log("Log: Generated bundle files"); // todo: REMOVE THIS LINE
};
