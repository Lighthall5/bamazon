var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "top_songsDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Buy item?",
        "Sell item",
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Buy item":
        itemSearch();
        break;

      case "Sell item":
        itemSell();
        break;
    });
}
function itemSearch() {
    inquirer
      .prompt({
        name: "item",
        type: "list",
        message: "What artist would you like to purchase?"
      })
      .then(function(answer) {
        var query = "SELECT item_id, product_id, price FROM products WHERE ?";
        connection.query(query, { bamazon: products.product_id }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + " || Name: " + res[i].products.product_id + " || Price: " + res[i].products.price);
          }
          runSearch();
        });
      });
  }