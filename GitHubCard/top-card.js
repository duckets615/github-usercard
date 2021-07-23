import {expandedCard} from './expand-card';
import {expandButton} from './expand-btn';

const topCard = (obj) => {

    //----- CREATED ELEMENTS ----- //

    const card = document.createElement('div');
    const topCard = document.createElement('div');
    const img = document.createElement('img');
    const cardInfo = document.createElement('div');
    const name = document.createElement('h3');
    const userName = document.createElement('p');
    const location = document.createElement('p');
    const profile = document.createElement('p');
    const aTag = document.createElement('a');
    const followers = document.createElement('p');
    const following = document.createElement('p');

    //----- CLASSES ----- //

    card.className = 'card';
    card.classList.add('card-close')
    topCard.className = 'topCard';
    card.classList.add('card-close');
    img.className = 'image';
    cardInfo.className = 'card-info';
    name.className = 'name';
    userName.className = 'userName';
    location.className = 'location';
    profile.className = 'profile';
    aTag.className = 'aTag';
    followers.className = 'followers';
    following.className = 'following';

    //----- CONTENT ----- //    
    const data = obj.data
    img.src = data['avatar_url'];
    name.innerText = data.name;
    userName.innerText = data.login;
    location.innerText = `Location:  ${data.location || `Unknown`}`;
    aTag.setAttribute('href', data.html_url);
    aTag.textContent = `${data.html_url || `No link available`}`;
    followers.innerText = `Followers: ${data.followers}`;
    following.innerText = `Following: ${data.following}`;

    //----- ASSEMBLY ----- //
    card.append(topCard);
    topCard.append(img, cardInfo);
    cardInfo.append(name, userName, location, profile, followers, following);
    profile.append(aTag);
    card.append(expandedCard(obj), expandButton(obj));

    return card;
}

export {topCard};