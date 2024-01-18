const fs = require("fs");

const calculatorService = (_req, res) => {
    dbReader(process.env.CALCULATOR_PATH, (err, data) => {
    if (err) {
      return res.status(400);
    } else {
      return res.status(200).send(data);
    }
  });
};

const dbReader = (filePath, callback) => {
  console.log(filePath, callback);
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return callback && callback(err);
    }

    try {
      const object = JSON.parse(fileData);
      console.log('OBJECT = ', object);
      return callback && callback(null, object);
    } catch (err) {
      return callback && callback(err);
    }
  });
};

module.exports = calculatorService;