

export interface Passenger {
    name: string;
    children?: string[];
}


const passenger1: Passenger = {
    name: 'Lucas'
};

const passenger2: Passenger = {
    name: 'Saida',
    children: ['Natalia', 'Gabriel']
};

const printChildren = ( passenger: Passenger ): number => {

    const howManyChildren = passenger.children?.length || 0;

    console.log( passenger.name,howManyChildren );

    return howManyChildren;

}

printChildren( passenger2 );

printChildren( passenger1 );