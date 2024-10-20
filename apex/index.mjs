import { compileModule } from "./compiler.mjs";
import { bundleModules } from "./bundler.mjs";

const build = async (entryPoint) => {
  await compileModule(entryPoint);
  await bundleModules();
};

const Apex = {
  build,
};

export default Apex;
