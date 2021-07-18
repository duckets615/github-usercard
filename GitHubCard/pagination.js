
const pagin = () => {
    const fragPagin = document.createDocumentFragment();
    const one = document.createElement('a');
    const two = document.createElement('a');
    const three = document.createElement('a');
    const four = document.createElement('a');
    const five = document.createElement('a');
    const six = document.createElement('a');
    const seven = document.createElement('a');
    const eight = document.createElement('a');
    const nine = document.createElement('a');

    one.classList.add('num', 'one');
    two.classList.add('num', 'two');
    three.classList.add('num', 'three');
    four.classList.add('num', 'four');
    five.classList.add('num', 'five');
    six.classList.add('num', 'six');
    seven.classList.add('num', 'seven');
    eight.classList.add('num', 'eight');
    nine.classList.add('num', 'nine');

    fragPagin.append(one,two,three,four,five,six,seven,eight,nine)
    return fragPagin;
}

export {pagin};