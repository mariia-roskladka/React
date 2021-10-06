import React from 'react';
<<<<<<< HEAD

export default props => {
  console.log(props);
  return (
    <div className="search">
      <h1 className="search__title">{`Hello, ${props.name}. What to search for you?`}</h1>
      <div className="search__field">
        <input type="text" className="search__input" />
        <button className="search__button">Search</button>
      </div>
    </div>
  );
};
=======
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import './index.scss';
import './search.scss';

const rootElement = document.querySelector('#root');

<<<<<<<< HEAD:lesson3/task1/src/Search.jsx
ReactDOM.render(<SearchField name="Mariia" age={20}/>, rootElement);
========
ReactDOM.render(<Search name="Bob" age={17} />, rootElement);
>>>>>>>> ac708ceae9f0ed77c550a372fecde80b5b199db3:lesson3/task1/src/index.jsx
>>>>>>> ac708ceae9f0ed77c550a372fecde80b5b199db3
