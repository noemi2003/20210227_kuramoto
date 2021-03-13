/**
 * items内のprice が 500 未満のものを見つけたい

 */

const items = [
  {
    id: 1,
    name: "strawberry",
    category: "fruits",
    count: 3,
    price: 500,
  },
  {
    id: 2,
    name: "watermelon",
    category: "fruits",
    count: 1,
    price: 2000,
  },
  {
    id: 3,
    name: "banana",
    category: "fruits",
    count: 2,
    price: 300,
  },
  {
    id: 4,
    name: "cabbage",
    category: "vegetables",
    count: 10,
    price: 200,
  },
  {
    id: 5,
    name: "tomato",
    category: "vegetables",
    count: 5,
    price: 100,
  },
];



// 試したコード
 console.log(items.price.filter((i) => i < 500));

 // エラー文章
 // TypeError: Cannot read property 'filter' of undefined
