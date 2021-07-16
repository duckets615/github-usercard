
const expandButton = () => {

    //----- CREATED ELEMENTS ----- //    
    const expandDiv = document.createElement('div');
    const expandButton = document.createElement('p');
    
    //----- CLASSES ----- //    
    expandDiv.className = 'expandDiv';
    expandButton.className = 'expandButtonOpen';
    
    //----- CONTENT ----- //    
    expandButton.textContent = 'Expand';
    
    //----- ASSEMBLY ----- //    
    expandDiv.appendChild(expandButton);

    expandButton.addEventListener('click', () => console.log('clicker'))

    return expandDiv;
}

export {expandButton};