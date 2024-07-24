const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;
var htmlToPdf = require('html-to-pdf');
app.get('/', (req, res) => {
  let x = ejs.render(
    '<h1>[?= users.join(" | "); ?]</h1>',
    { users: ['asdsaf', '23423432', '234234324'] },
    { delimiter: '?', openDelimiter: '[', closeDelimiter: ']' }
  );

  htmlToPdf.convertHTMLString(
    x,
    './destination.pdf',
    function (error, success) {
      if (error) {
        console.log('Oh noes! Errorz!');
        console.log(error);
      } else {
        console.log('Woot! Success!');
        console.log(success);
      }
    }
  );

  res.send(x);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
