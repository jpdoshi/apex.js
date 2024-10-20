import { compileModule } from "./compiler.mjs";
import { bundleModules } from "./bundler.mjs";
import cliUtils from "./cli.mjs";

const build = async (entryPoint) => {
  const startTime = Date.now();

  cliUtils.info("STEP-1: COMPILING MODULES");
  await compileModule(entryPoint);

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
