console.log('person1 shows ticket');
console.log('person2 shows ticket');

// Promises version
const preMoviePromises = () => {
  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  
  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const getCandy = new Promise((resolve, reject) => {
    setTimeout(() => resolve('candy'), 3000);
  });
  
  const getCoke = new Promise((resolve, reject) => {
    setTimeout(() => resolve('coke'), 3000);
  });
  
  const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('cold drinks'), 3000);
  });

  return person3PromiseToShowTicketWhenWifeArrives
    .then((ticket) => {
      return Promise.all([getPopcorn, getCandy, getCoke])
        .then(([popcorn, candy, coke]) => {
          console.log(`Got ${popcorn}, ${candy}, ${coke}`);
          return getColdDrinks;
        })
        .then((coldDrinks) => {
          console.log(`Got ${coldDrinks}`);
          return ticket;
        });
    });
};

preMoviePromises().then((t) => console.log(`person4 shows ${t}`));
console.log('person4 shows ticket');

// Async/Await version
const preMovieAsyncAwait = async () => {
  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  
  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const getCandy = new Promise((resolve, reject) => {
    setTimeout(() => resolve('candy'), 3000);
  });
  
  const getCoke = new Promise((resolve, reject) => {
    setTimeout(() => resolve('coke'), 3000);
  });
  
  const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('cold drinks'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
  let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke]);
  console.log(`Got ${popcorn}, ${candy}, ${coke}`);
  
  const coldDrinks = await getColdDrinks;
  console.log(`Got ${coldDrinks}`);

  return ticket;
};

preMovieAsyncAwait().then((t) => console.log(`person4 shows ${t}`));
console.log('person4 shows ticket');
