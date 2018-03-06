const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (file) => {
  fs.writeFileSync(file, "");
};

module.exports.mkdir = (path) => {
  fs.mkdirSync(path);
};
