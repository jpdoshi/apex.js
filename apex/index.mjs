import { compileModule } from "./compiler.mjs";
import { bundleModules } from "./bundler.mjs";
import cliUtils from "./cli.mjs";

const build = async (entryPoint) => {
  cliUtils.info("STEP-1: COMPILING MODULES");
  await compileModule(entryPoint);

  cliUtils.info("\nSTEP-3: BUNDLING MODULES");
  await bundleModules();

  cliUtils.warn("\nInfo: Execution Complete");
};

const Apex = {
  build,
};

export default Apex;
