let url = 'https://www.instagram.com/9gag/?__a=1';

const instaPromise = fetch(url);
console.log(instaPromise);
instaPromise
.then((data) => data.json())
.then((data) => {

  console.log(data);
  console.log(data.user);
  const object = {...data.user}
  //Imprimir Usuario y Bio
  console.log(`USERNAME: ${object.username}
BIO: ${object.biography}`);

//Ordenamiento del array
const posts = [...object.media.nodes];
posts.sort((a,b) => b.likes.count - a.likes.count);
posts.forEach(posts => {console.log(`CAPTION: ${posts.caption}
LIKES: ${posts.likes.count}
COMMENTS: ${posts.comments.count}`)});
});
