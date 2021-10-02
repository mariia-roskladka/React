const rootElement = document.querySelector('#root');

// const greetingELem = document.createElement('div');
// greetingELem.classList.add('greeting');
// greetingELem.textContent = 'Hello React!';

// rootElement.append(wrapperElem);

const greetingELem = React.createElement(
    'div', { className: 'greeting' },
    'Hello React'
);