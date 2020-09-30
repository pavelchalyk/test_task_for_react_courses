const data = [
    {
        product_name: "Nail",
        count: 67,
        price_for_all: 364
    },
    {
        product_name: "Hammer",
        count: 43,
        price_for_all: 453
    },
    {
        product_name: "Tile",
        count: 23,
        price_for_all: 553
    }
];

let count = 0;
let price = 0;
data.forEach(function (product) {
    count += product.count;
    price += product.price_for_all;
});

console.log({ 'count': count, 'price': price });

// Подсчитать общее количество товаров и цену
// { count: 133, price: 1370 }
