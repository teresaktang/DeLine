class deline{

}

class frame{
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

}


/*
#api call
const word = 'butterfly';
const directory = word.split('').slice(0,2).join('/');
// b/u
const repository =  'open-dictionary/english-dictionary';
const branch = 'master';
const baseURL = 'https://raw.githubusercontent.com';
const url = `${baseURL}/${repository}/${branch}/${directory}/${word}/en.json`;
// https://raw.githubusercontent.com/open-dictionary/english-dictionary/master/b/u/butterfly/en.json
const result = await fetch(url).then(res => res.json());
*/
