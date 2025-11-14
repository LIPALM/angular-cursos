
function addNumbers(a:number , b: number): number {
    return a + b;
}


const addNumbersArrow = (a:number, b: number):string => {
    return `${ a + b }`;
}


function multiply (firstNumber: number, seconNumbers?: number, base: number = 7) {
    return firstNumber * base
}


interface character{
    name: string;
    hp: number;
    showpv: () => void
}

const healCharacter = ( character: character, amount: number ) => {
    character.hp += amount
}

const strider = {
    name: 'lucas',
    hp: 50,
    showpv(){
        console.log(`puntos de vida ${ this.hp}`);
    }
}



// const result: number = addNumbers(2,4);
// const result2: string = addNumbersArrow(2,4);
// const result3: number = multiply(7);
// console.log({result, result2, result3})
healCharacter( strider, 10);
healCharacter( strider, 50);


strider.showpv();

export{}