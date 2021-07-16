
const tabInfo = (obj) => {

    //----- CREATED ELEMENTS ----- //
    
    const expandCard = document.createElement('div');
    const ID = document.createElement('p');
    const twitter = document.createElement('p');
    const email = document.createElement('p');
    const company = document.createElement('p');
    const hireable = document.createElement('p');
    const bio = document.createElement('p');
    const blog = document.createElement('p');
    const repoLink = document.createElement('a');
    const created = document.createElement('p');
    const updated = document.createElement('p');
    
    //----- CLASSES ----- //
    
    expandCard.className = 'expandCard';
    expandCard.classList.add('expandCardClose');
    ID.className = 'id';
    twitter.className = 'twitter';
    email.className = 'email';
    company.className = 'company';
    hireable.className = 'hireable';
    bio.className = 'bio';
    blog.className = 'blog';
    repoLink.className = 'repoLink';
    created.className = 'created';
    updated.className = 'updated';
    
    //----- CONTENT ----- //
    const data = obj.data;
    ID.textContent = `User ID: ${data.id || `private`}`;
    twitter.textContent = `Twitter Handle: ${data.twitter_username || `private`}`;
    email.textContent = `Email: ${data.email || `private`}`;
    company.textContent = `Company: ${data.company || `private`}`;
    hireable.textContent = `Hireable? ${data.hireable === true || data.hireable === null ? `Available!` : `Not at this time`}`;
    bio.textContent = `Bio: ${data.bio || `private`}`;
    blog.textContent = `Blog: ${data.blog || `private`}`;
    repoLink.href = `Repositories: ${data.repos_url || `Not available`}`;
    created.textContent = `Profile created: ${data.created_at || `Date not available`}`;
    updated.textContent = `Profile last updated: ${data.updated_at || `Unknown`}`;
    
    //----- ASSEMBLY ----- //

    expandCard.appendChild(ID);
    expandCard.appendChild(twitter);
    expandCard.appendChild(email);
    expandCard.appendChild(company);
    expandCard.appendChild(hireable); 
    expandCard.appendChild(bio);
    expandCard.appendChild(blog);
    expandCard.appendChild(repoLink);
    expandCard.appendChild(created);
    expandCard.appendChild(updated);

    return expandCard;
}

export {tabInfo};