import Apex from "./apex/index.mjs";

const entryPoint = "./src/App.apex";
const baseTemplate = "./base.template.html";

Apex.build(entryPoint, baseTemplate);
