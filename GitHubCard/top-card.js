const topCard = () => {
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

    img.src = obj.data['avatar_url'];
    name.innerText = obj.data.name;
    userName.innerText = obj.data.login;
    location.innerText = `Location: ${obj.data.location}`;
    aTag.setAttribute('href', obj.data.html_url);
    aTag.textContent = obj.data.html_url;
    profile.textContent = aTag;
    followers.innerText = `Followers: ${obj.data.followers}`;
    following.innerText = `Following: ${obj.data.following}`;

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

const logger = () => console.log('top-card import working');

export {topCard, logger};