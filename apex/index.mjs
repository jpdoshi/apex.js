import { compileModule } from "./compiler.mjs";

const setup = (entryPoint) => {
  compileModule(entryPoint);
};

const Apex = {
  setup,
};

export default Apex;
