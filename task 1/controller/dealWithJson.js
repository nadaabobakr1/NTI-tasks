const fs = require("fs");
const readFromJson = () => {
  let data;
  try {
    data = JSON.parse(fs.readFileSync("data.json"));
  } catch (error) {
    console.log(error.message);
    data = [];
  }
  return data;
};
console.log(readFromJson());

const writeToJson = (data) => {
  fs.writeFileSync("data.json", JSON.stringify(data));
};
module.exports = { writeToJson, readFromJson };
