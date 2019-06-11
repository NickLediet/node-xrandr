const { parser: xrandrParser } = require("xrandr");
const { exec } = require("child_process");

const promiseExec = cmd => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) reject(error);

      resolve({ stdout, stderr });
    });
  });
};

const main = async () => {
  try {
    const { stdout, stderr } = await promiseExec("xrandr");

    if (stderr) {
      console.err(stderr);
      process.exit();
    }

    const monitors = Object.keys(xrandrParser(stdout));

    console.log(monitors);
  } catch (err) {
    console.error(err);
  }
};

main();
