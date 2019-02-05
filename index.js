#!/usr/bin/env node

const figlet = require("figlet");

figlet("Joseph Martinsen", function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }

  console.log(data);
  console.log(
    "Howdy my name is Joseph Martinsen and I am Senior Computer Engineer at Texas A&M\n"
  );
  console.log("Website: http://joseph.martinsen.com");
  console.log("LinkedIn: https://linkedin.com/in/joseph-martinsen/");
  console.log("Github: https://github.com/JosephMart");
  console.log("Twitter: https://twitter.com/nbahoopstar05");
});
