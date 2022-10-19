
const elm = document.getElementById("examSoft");
const URL_RANDOM_DOG = "https://dog.ceo/api/breeds/image/random";
const DOG_LIMIT = 10;

// el: element node object
// moves the element to the right by 100px over a duration of 1 second
function animateRight(el) {
  let start = Date.now();
  let timer = setInterval(() => {
    let timePassed = Date.now() - start;
    el.style.left = timePassed / 10 + 'px';

    if (timePassed > 1000) clearInterval(timer);

  }, 10);
}



// Dog API
// Create an app that displays a random dog image, and links to 10 random dog pictures on the bottom, labeled by their breed.

const extractBreedTitle = (url) => {
  const start = url.slice(url.indexOf("breeds") + ("breeds".length + 1));
  const breedCollection = start.substring(0, start.indexOf('/'));
  const breed = breedCollection.substring(0, breedCollection.indexOf('-'));
  const subBreed = breedCollection.substring(breedCollection.indexOf('-') + 1);
  return breed === subBreed ? breed : `${breed} ${subBreed}`;
}

const fetchRandomDog = async () => {
  const singleDog = await fetch(URL_RANDOM_DOG).then(data => data.json());
  const { message: dog } = singleDog;
  const alphaDog = document.getElementById("random-dog");
  const header = document.createElement('h2');
  const img = document.createElement('img');

  img.setAttribute("src", dog);
  header.innerHTML = extractBreedTitle(dog);
  alphaDog.appendChild(img);
  alphaDog.appendChild(header);
}

const fetchRandomDogs = async () => {
  const multiDogs = await fetch(URL_RANDOM_DOG + '/' + DOG_LIMIT).then(data => data.json());
  const dogContainer = document.getElementById("dog-container");
  const { message: dogs } = multiDogs;

  dogs.forEach((item) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    let header = document.createElement("h5");
    img.setAttribute("src", item);
    header.innerHTML = extractBreedTitle(item);
    li.appendChild(img);
    li.appendChild(header);
    dogContainer.appendChild(li);
  })
}

animateRight(elm);
fetchRandomDog();
fetchRandomDogs();


