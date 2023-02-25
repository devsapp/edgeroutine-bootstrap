const babel = require("@babel/core");
const path = require('path');
const fs = require('fs');
const code = fs.readFileSync(path.join(__dirname,'./edge.js')).toString();
const result = babel.transformSync(code, {
    plugins: ["@babel/plugin-transform-async-to-generator"],
  });

console.log(result.code)