
const tabInfo = () => {

    //----- CREATED ELEMENTS ----- //
    
    const card = document.createElement('div');
    const basicInfo = document.createElement('p');
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
    
    card.className = 'card';
    basicInfo.className = 'basicInfo';
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
    
    basicInfo.textContent = `User Info`
    ID.textContent = `User ID: ${obj.data.id}`;
    twitter.textContent = `Twitter Handle: ${obj.data.twitter_username}`;
    email.textContent = `Email: ${obj.data.email}`;
    company.textContent = `Company: ${obj.data.company}`;
    hireable.textContent = `Hireable${obj.data.hireable}`;
    hireable.textContent = `Hireable? ${obj.data.hireable}`;
    bio.textContent = `Hireable? ${obj.data.hireable}`
    blog.textContent = `Blog: ${obj.data.blog}`;
    repoLink.href = `Repositories: ${obj.data.repos_url}`
    created.textContent = `Account created: ${obj.data.created_at}`
    updated.textContent = `Account updated: ${obj.data.updated_at}`
    
    //----- ASSEMBLY ----- //

    card.appendChild(basicInfo);
    card.appendChild(ID);
    card.appendChild(twitter);
    card.appendChild(email);
    card.appendChild(company);
    card.appendChild(hireable); 
    card.appendChild(bio);
    card.appendChild(blog);
    card.appendChild(repoLink);
    card.appendChild(created);
    card.appendChild(updated);

    return card;
}

const loggerEx = () => console.log('expand-card import works!')
export {tabInfo, loggerEx};