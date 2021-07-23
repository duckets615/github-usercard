
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

    //----- EV LISTENER ----- //    
    expandButton.addEventListener('click', (e) => {
        const btn = e.currentTarget;
        const btnDiv = e.target.parentElement;
        const expandCard = e.target.parentElement.previousSibling;     
        const card = e.target.parentElement.parentElement;
        
        if (card.classList.contains('card-close')) {
            btn.style.opacity = 0;
            expandCard.style.opacity = 0;
            btn.textContent = 'Collapse';
            card.classList.replace('card-close', 'card-open');
            expandCard.classList.replace('expandCardClose', 'expandCardOpen');
            btnDiv.classList.replace('expandDivClose', 'expandDivOpen');
            setTimeout(() => {
                btn.style.opacity = 1;
                expandCard.style.opacity = 1;
            },500);
        } else {
            btn.style.opacity = 0;
            expandCard.style.opacity = 0;
            btn.textContent = 'Expand';
            card.classList.replace('card-open', 'card-close');
            expandCard.classList.replace('expandCardOpen', 'expandCardClose');
            btnDiv.classList.replace('expandDivOpen', 'expandDivClose');
            setTimeout(() => {
                btn.style.opacity = 1;
            },500);
        }
    });
    return expandDiv;
}

export {expandButton};
