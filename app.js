let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquids: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
  //Using callback hell
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("The Production has started");

    setTimeout(() => {
      console.log("the fruit has been chopped");

      setTimeout(() => {
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} are added`);

        setTimeout(() => {
          console.log("the machine started");

          setTimeout(() => {
            console.log(`the ice cream is placed on a ${stocks.holder[0]}`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added as toppings`);

              setTimeout(() => {
                console.log("Serve Ice Cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(2, production);
