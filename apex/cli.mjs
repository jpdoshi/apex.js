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

const cliUtils = {
  log,
  error,
  warn,
  info,
};

export default cliUtils;
