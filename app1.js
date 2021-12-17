//Using Promises
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquids: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log("our shop is closed"));
        }
    });
};

order(2000, () => console.log(`${stocks.Fruits[0]} is selected`))
    .then(() => {
        return order(0000, () => console.log("production has started"));
    })
    .then(() => {
        return order(2000, () => console.log(`${stocks.Fruits[0]} has been chopped`));
    })
    .then(() => {
        return order(2000, () => console.log(`${stocks.liquids[0]} , ${stocks.liquids[1]} are added`));
    })
    .then(() => {
        return order(2000, () => console.log(`the machine started`));
    })
    .then(() => {
        return order(3000, () => console.log(`the ice cream is placed on a ${stocks.holder[0]}`));
    })
    .then(() => {
        return order(2000, () => console.log("Serve the ice cream"));
    })

    .catch(() => { console.log("Customer left"); })

    .finally(() => { console.log("day ended, shop is closed"); })
