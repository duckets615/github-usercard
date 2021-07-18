
const expandButton = () => {

    //----- CREATED ELEMENTS ----- //    
    const expandDiv = document.createElement('div');
    const expandButton = document.createElement('p');
    
    //----- CLASSES ----- //    
    expandDiv.className = 'expandDiv';
    expandDiv.classList.add('expandDivClose');
    expandButton.classList.add('expandButton');
    expandButton.classList.add('expandButton');
    
    //----- CONTENT ----- //    
    expandButton.textContent = 'Expand';
    
    //----- ASSEMBLY ----- //    
    expandDiv.appendChild(expandButton);

    expandButton.addEventListener('click', (e) => {
        const btn = e.currentTarget;
        const btnDiv = e.target.parentElement;
        const expandCard = e.target.parentElement.previousSibling;     
        const card = e.target.parentElement.parentElement;

        if (card.classList.contains('card-close')) {
            btn.textContent = 'Collapse';
            card.classList.replace('card-close', 'card-open');
            expandCard.classList.replace('expandCardClose', 'expandCardOpen');
            btnDiv.classList.replace('expandDivClose', 'expandDivOpen');
        } else {
            btn.textContent = 'Expand';
            card.classList.replace('card-open', 'card-close');
            expandCard.classList.replace('expandCardOpen', 'expandCardClose');
            btnDiv.classList.replace('expandDivOpen', 'expandDivClose');
        }
    });

    return expandDiv;
}

export {expandButton};