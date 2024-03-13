function solve(progres){
    const createbar = (progres) => `[${'%'.repeat(progres / 10)}${'.'.repeat(10 - progres / 10)}]`
    const showbar = (progres) => `${progres}% ${createbar(progres)}`

    if(progres < 100){
        console.log(showbar(progres));
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(showbar(progres));
    }
}