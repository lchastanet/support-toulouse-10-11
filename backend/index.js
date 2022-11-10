const app = require("./src/app.js");

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 8000");
  }
});
