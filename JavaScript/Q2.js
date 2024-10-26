//filtering an array of objects to display items based on the search query

const products = [
  { id: 1, name: 'Product 1', type: 'Electronics', price: 99.99 },
  { id: 2, name: 'Product 2', type: 'Fashion', price: 49.99 },
  { id: 3, name: 'Product 3', type: 'Home Goods', price: 29.99 },
  { id: 4, name: 'Product 4', type: 'Electronics', price: 199.99 },
  { id: 5, name: 'Product 5', type: 'Fashion', price: 79.99 },
];  

let newarr = products.filter(function(value){
    return value.type ===  'Electronics'
})

console.log(newarr)