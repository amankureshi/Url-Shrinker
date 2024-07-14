const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
console.log(path);

module.exports = (req, res) => {
  const filePath = path.join(__dirname, "../views/index.ejs");
  const template = fs.readFileSync(filePath, "utf8");
  const html = ejs.render(template, { title: "Hello, Vercel!" });
  res.send(html);
};
