import type { Product } from './06-function-destructuring';
import { taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 200
    },
    {
        description: 'iPad',
        price: 100
    }
];

// tax = 0.15%

const [ total, tax ] = taxCalculation({
    tax: 0.15,
    products: shoppingCart
});

console.log('Total', total)
console.log('tax', tax)