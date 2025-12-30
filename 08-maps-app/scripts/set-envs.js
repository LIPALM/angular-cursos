// npm i -D dotenv para instalar dotenv
const { writeFileSync, mkdirSync } = require('fs')

require('dotenv').config();

const targetPath = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

const mapBoxToken = process.env['MAPBOX-KEY'];

if ( !mapBoxToken ) {
  throw new Error('MAPBOX-KEY is not defined in the environment variables');
}

const envFileContent = `
export const environment = {
  mapBoxToken: "${mapBoxToken}"
}
`;


mkdirSync('./src/environments', { recursive: true });
writeFileSync(targetPath, envFileContent);
writeFileSync(targetPathDev, envFileContent);
