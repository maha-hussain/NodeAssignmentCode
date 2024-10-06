
//make array of movies - title, storyline
const movies = [
    [`Howl's Moving Castle`, `A movie about a young girl who is cursed by a witch, turning her into an old woman. During her journey to break her curse, she meets a powerful wizard, Howl.`],
    [`Spirited Away`, `A young girl, Chihiro, becomes trapped in a mysterious and magical world of spirits, where she must work in a bathhouse while trying to free her parents and return to the human world.`],
    [`My Neighbour Totoro`,`Two young sisters move to the countryside and discover friendly forest spirits, including the gentle and giant Totoro, who helps them through difficult times.` ]
];

// function getMovies() 
    // 1. iterate through movie list
    // 2. timeout of 1000ms

  function getMovies(){
    setTimeout(() => {

        movies.forEach((movie) => console.log(`Title: ${movie[0]} \nStoryline: ${movie[1]} \n`));

    }, 1000);
};


// async function createMovies() 
    // 1. fetches argument movie, pushes to array list
    // 2. returns a promise
    // 3. timeout of 2000ms

async function createMovie(title, storyline){

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
        if(title!=null && storyline!=null){ //if the params are not empty then push onto array
            movies.push([title , storyline]);
            resolve('movie added successfully');
        } else { //else error message
            reject('error: empty parameter detected, please provide a valid string');
        }

    }, 2000)
});
 
};

// function init()
    // calls createMovie() and getMovies()
    // getmovies() can only run after createMovies is done

async function init(){
console.log('loading...');

//error handling
try {
const result = await createMovie(`Kiki's Delivery Service`,`A young witch named Kiki moves to a new town to find her independence, starting a delivery service and learning valuable life lessons along the way.`); //waits for the promise to resolve first
getMovies(); //then calls func to print the array
console.log(result); // result of promise
} catch (err){ 
console.log(err); //prints any errors
};
};

   
init();


