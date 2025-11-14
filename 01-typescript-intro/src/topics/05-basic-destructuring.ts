
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    detail: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "Mean to be",
    detail: {
        author: 'bbno$',
        year: 2024,
    }
}

const {song:anotherSong, songDuration:duration, detail:{ author }} = audioPlayer;

//const {song:anotherSong, songDuration:duration, detail} = audioPlayer;
//const {author}= detail;

//console.log('Song: ', anotherSong);
//console.log('Duration: ', duration)
//console.log('author: ', audioPlayer.detail.author);
//console.log('author: ', author );

//const dbz: string[] = ['goku', 'vegeta', 'trunk']
const [ , , trunks = 'not found']: string[] = ['goku', 'vegeta']


//console.log('personaje 3: ', dbz[3] || 'no hay personaje encontrado')
console.log('personaje dbz: ', trunks)



export{}