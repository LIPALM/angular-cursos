
export function whatsMyType<T>( argument: T ): T {

    
    return argument;
}

let amIStirng = whatsMyType<string>( 'Hola Mundo' );
let amINumber = whatsMyType<number>( 123 );
let amIArray = whatsMyType<number[]>( [1,2,3,4,5] );


console.log( amIStirng.split(' ') );
console.log( amINumber.toFixed(2) );
console.log( amIArray.join(' - ') );