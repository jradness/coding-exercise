// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

// xs: array
// returns: a new array, with unique items
const array = ["Jason", 1, 4, 3, 3, 5, 6, 6, 2, "Jason"];
function removeDuplicates(xs) {
  return [... new Set(xs)];
}

delay(3000).then(() => console.log('👋 Hello ExamSoft after 3 seconds'));
const duplicates = removeDuplicates(array);

console.log(duplicates);
