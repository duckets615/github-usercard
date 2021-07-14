const topCard = (obj) => {

    //----- CREATED ELEMENTS ----- //

    const card = document.createElement('div');
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

    img.src = obj.data['avatar_url'];
    name.innerText = obj.data.name;
    userName.innerText = obj.data.login;
    location.innerText = `Location: ${obj.data.location}`;
    aTag.setAttribute('href', obj.data.html_url);
    aTag.textContent = obj.data.html_url;
    followers.innerText = `Followers: ${obj.data.followers}`;
    following.innerText = `Following: ${obj.data.following}`;

    //----- ASSEMBLY ----- //

    card.appendChild(img);
    card.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
    profile.append(aTag);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);

    return card;
}

export {topCard};