
const expandButton = () => {

    //----- CREATED ELEMENTS ----- //    
    const expandDiv = document.createElement('div');
    const expandButton = document.createElement('p');
    
    //----- CLASSES ----- //    
    expandDiv.className = 'expandDiv';
    expandButton.className = 'expandButton';
    
    //----- CONTENT ----- //    
    expandButton.textContent = 'Expand';
    
    //----- ASSEMBLY ----- //    
    expandDiv.appendChild(expandButton);

    return expandDiv;
}

export {expandButton};