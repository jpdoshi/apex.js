import chalk from "chalk";

const log = (...message) => {
  console.log(chalk.white(...message));
};

const error = (...message) => {
  console.error(chalk.red(...message));
};

const warn = (...message) => {
  console.warn(chalk.yellow(...message));
};

const info = (...message) => {
  console.info(chalk.cyan(...message));
};

const clear = (...logs) => {
  console.clear();
  console.log(chalk.white(...logs));
};

const cliUtils = {
  log,
  error,
  warn,
  info,
  clear,
};

export default cliUtils;
