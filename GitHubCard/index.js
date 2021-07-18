import axios from 'axios';
import {topCard} from './top-card';
import {pagin} from './pagination'

const users = [
  'duckets615',
  'tetondan', 
  'dustinmyers', 
  'justsml', 
  'luishrd',
  'bigknell',
  'jonathanong',
  'mikermcneil',
  'benbalter',
  'jxnblk',
  'yegor256',
  'orta',
  'rstacruz',
  'GrahamCampbell',
  'afc163',
  'kamranahmedse',
  'joshaber',
  'bkeepers',
  'kennethreitz',
  'STRML',
  'atmos',
  'weierophinney',
  'agentzh',
  'steipete',
  'mikepenz',
  'nvie',
  'hadley',
  'appleboy',
  'Rich-Harris',
  'fabpot'
];
console.log(pagin())
const cards = document.querySelector('.cards');

const cardStructure = obj => {
  let frag = document.createDocumentFragment();
  frag.appendChild(topCard(obj));
  cards.appendChild(frag);
}

users.forEach(person => {
  axios.get(`https://api.github.com/users/${person}`)
  .then(response => cardStructure(response))
  .catch(error => console.log(error));
});

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
    */
   
   /* const followersArray = [];

   
   STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
    */

// function cardStructure(obj) {
//   const card = document.createElement('div');
//   const img = document.createElement('img');
//   const cardInfo = document.createElement('div');
//   const name = document.createElement('h3');
//   const userName = document.createElement('p');
//   const location = document.createElement('p');
//   const profile = document.createElement('p');
//   const aTag = document.createElement('a');
//   const followers = document.createElement('p');
//   const following = document.createElement('p');
//   // expanded info
//   const expandInfo = document.createElement('div');
//   const basicInfo = document.createElement('p');
//   const ID = document.createElement('p');
//   const twitter = document.createElement('p');
//   const email = document.createElement('p');
//   const company = document.createElement('p');
//   const hireable = document.createElement('p');
//   const bio = document.createElement('p');
//   const blog = document.createElement('p');
//   const repoLink = document.createElement('a');
//   const created = document.createElement('p');
//   const updated = document.createElement('p');
//   // expand button
//   const expand = document.createElement('div');
//   const expandChild = document.createElement('p')
//   //-------------------------------------//
//   //----- top card classes----- //
//   card.className = 'card';
//   card.classList.add('card-close');
//   img.className = 'image';
//   cardInfo.className = 'card-info';
//   name.className = 'name';
//   userName.className = 'userName';
//   location.className = 'location';
//   profile.className = 'profile';
//   aTag.className = 'aTag';
//   followers.className = 'followers';
//   following.className = 'following';
//   //----- expanded info classes----- //
//   expandInfo.className = 'expandInfo';
//   basicInfo.className = 'basicInfo';
//   ID.className = 'id';
//   twitter.className = 'twitter';
//   email.className = 'email';
//   company.className = 'company';
//   hireable.className = 'hireable';
//   bio.className = 'bio';
//   blog.className = 'blog';
//   repoLink.className = 'repoLink';
//   created.className = 'created';
//   updated.className = 'updated';
//   //----- expand btn classes----- //
//   expand.className = 'expand';
//   expand.setAttribute('valign', 'bottom');
//   expandChild.className = 'expandChild';
//   //----------------------------------------
  // 
//   //----- top card append ----- //
//   card.appendChild(img);
//   card.appendChild(cardInfo);
//   cardInfo.appendChild(name);
//   cardInfo.appendChild(userName);
//   cardInfo.appendChild(location);
//   cardInfo.appendChild(profile);
//   profile.append(aTag);
//   cardInfo.appendChild(followers);
//   cardInfo.appendChild(following);
//   cardInfo.appendChild(expand);
//   //----- expand card append ----- //
//   expandInfo.appendChild(basicInfo);
//   expandInfo.appendChild(ID);
//   expandInfo.appendChild(twitter);
//   expandInfo.appendChild(email);
//   expandInfo.appendChild(company);
//   expandInfo.appendChild(hireable); 
//   expandInfo.appendChild(bio);
//   expandInfo.appendChild(blog);
//   expandInfo.appendChild(repoLink);
//   expandInfo.appendChild(created);
//   expandInfo.appendChild(updated);
//   card.appendChild(expandInfo)
  //---- expanded btn append --------//
  // expand.appendChild(expandChild)
  // 
  //---- top card data --------//
  // img.src = obj.data['avatar_url'];
  // name.innerText = obj.data.name;
  // userName.innerText = obj.data.login;
  // location.innerText = `Location: ${obj.data.location}`;
  // aTag.setAttribute('href', obj.data.html_url);
  // aTag.textContent = obj.data.html_url;
  // profile.textContent = aTag;
  // followers.innerText = `Followers: ${obj.data.followers}`;
  // following.innerText = `Following: ${obj.data.following}`;
  // //---- expand card data --------//
  // basicInfo.textContent = `User Info`
  // ID.textContent = `User ID: ${obj.data.id}`;
  // twitter.textContent = `Twitter Handle: ${obj.data.twitter_username}`;
  // email.textContent = `Email: ${obj.data.email}`;
  // company.textContent = `Company: ${obj.data.company}`;
  // hireable.textContent = `Hireable${obj.data.hireable}`;
  // hireable.textContent = `Hireable? ${obj.data.hireable}`;
  // bio.textContent = `Hireable? ${obj.data.hireable}`
  // blog.textContent = `Blog: ${obj.data.blog}`;
  // repoLink.href = `Repositories: ${obj.data.repos_url}`
  // created.textContent = `Account created: ${obj.data.created_at}`
  // updated.textContent = `Account updated: ${obj.data.updated_at}`
  // 
  // 
  // //---- expand btn data --------//
  // expandChild.textContent = 'Expand'
  // 
  // expandChild.addEventListener('click', () => {
  //   const info = card.classList;
    // 
  //   if (info.contains('card-close')) {
  //     info.replace('card-close','card-open');
  //     expandChild.style.opacity = 0
  //     setTimeout(() => {
  //       expandChild.textContent = 'collapse';
  //       expandChild.style.opacity = 1;
  //     },1000)      
  //   } else {
  //     info.replace('card-open', 'card-close');
  //     expandChild.style.opacity = 0
  //     setTimeout(() => {
  //       expandChild.textContent = 'Expand';
  //       expandChild.style.opacity = 1;
  //     },1000)
  //   }
//   });

// 
// {
//   "id": 173,
//   "starred_url": "https://api.github.com/users/bkeepers/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/bkeepers/subscriptions",
//   "organizations_url": "https://api.github.com/users/bkeepers/orgs",
//   "repos_url": "https://api.github.com/users/bkeepers/repos",
//   "company": null,
//   "blog": "http://opensoul.org",
//   "email": null,
//   "hireable": true,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 184,
//   "public_gists": 82,
//   "created_at": "2008-02-09T16:42:49Z",
//   "updated_at": "2021-07-12T19:05:52Z"
// }