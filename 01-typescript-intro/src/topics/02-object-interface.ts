// estamos definiendo que los skills sean solo string , no boooleano o true
 //let skills: string[] = ['bash', 'Counter', 'healing', 123, true]

const skills: string[] = ['bash', 'Counter', 'healing']

interface characters {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

// ctrl + . \\
const strider: characters = {
    name: 'Strider',
    hp: 100,
    skills: ['bash', 'Counter'],
}

strider.hometown = "Rivendall"

console.table(strider)


export{};