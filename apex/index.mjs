import { compileModule } from "./compiler.mjs";
import { bundleModules } from "./bundler.mjs";
import cliUtils from "./cli.mjs";

import path from "path";
import config from "../apex.config.js";

const build = async () => {
  const startTime = Date.now();

  cliUtils.info("STEP-1: COMPILING MODULES");
  await compileModule(path.join(config.srcPath, "App.apex")); // todo: call this method for all modules

  cliUtils.info("\nSTEP-3: BUNDLING MODULES");
  await bundleModules();

  const endTime = Date.now();
  const executionTime = endTime - startTime;

  cliUtils.warn(`\nInfo: Compilation Complete (${executionTime}ms)`);
};

const Apex = {
  build,
};

export default Apex;
