const rootElement = document.querySelector('#root');

// const greetingELem = document.createElement('div');
// greetingELem.classList.add('greeting');
// greetingELem.textContent = 'Hello React!';

// rootElement.append(greetingElem);

const greetingELem = React.createElement(
    'div', { className: 'greeting' },
    'Hello, React!'
);

ReactDOM.render(greetingELem, rootElement);