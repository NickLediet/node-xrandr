const { parser: xrandrParser } = require("xrandr");
const { exec } = require("child_process");

const promiseExec = cmd => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) reject(error);

      resolve(stdout ? stdout : stderr);
    });
  });
};

const main = async () => {
  try {
    const data = await promiseExec("xrandr");
    console.log(xrandrParser(data));
  } catch (err) {
    console.error(err);
  }
};

main();
