const express = require("express");
const app = express();
const port = 9000;

app.get("/", function (req, res) {
    const html = `
    <html lang="en">
    <head>
        <script src="client.js" async defer></script>
    </head>
    <body>
        <div id="root">Hello World</div>
    </body>
    </html>
    `;

  res.send(html);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
