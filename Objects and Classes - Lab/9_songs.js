function solve(arr){
    class Song{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let songsNumber = arr.shift();
    let songsType = arr.pop();


    for(let i=0; i < songsNumber; i++){
        const[type, name, time] = arr[i].split('_')
        songs.push(new Song(type, name, time));
    }

    if(songsType === 'all'){
        songs.forEach((i) => console.log(i.name))
    } else {
        songs.filter((i) => i.type === songsType).forEach((i) => console.log(i.name))
    }
}

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )