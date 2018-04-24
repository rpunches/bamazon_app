var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllItems();
    start();
});

function queryAllItems() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].price);
        }
        console.log("--------------------------------------");
    });
}

function start() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;

        inquirer
            .prompt([
                {
                    name: "findId",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].product_name);
                        }
                        return choiceArray;
                    },
                    message: "What is the ID number of the product you would like to purchase?"
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like to purchase?"
                }
            ])
            .then(function (answer) {
                var chosenItem;
                console.log(answer);
                for (var i = 0; i < results.length; i++) {
                    if (results[i].product_name === answer.findId) {
                        chosenItem = results[i];
                    }
                }
                if (parseInt(chosenItem.stock_quantity) < parseInt(answer.quantity)) {
                    console.log('\n\after\n\n');
                    console.log(' we have ' + chosenItem.stock_quantity + ' and you asked for' + answer.quantity)
                    console.log("We do not have enough of that item to fulfill your order, please select a lower quantity or another item.")
                    start();
                }
                else if (parseInt(chosenItem.stock_quantity) >= parseInt(answer.quantity)) {
                    var updatedQuantity = parseInt(chosenItem.stock_quantity) - parseInt(answer.quantity);
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: updatedQuantity
                            },
                            {
                                id: chosenItem.id
                            }
                        ],
                        function (error) {

                            if (error) console.log(error);
                            console.log("Order placed successfully! Thank you for shopping with us!");
                            start();
                        }
                    );
                }
                else {
                    console.log("Sorry! We are completely sold out of that item!  Please choose another item for sale!");
                    start();
                }
            });
    });
}
