import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import UserOutput from '../components/UserOutput/UserOutput';
import UserInput from '../components/UserInput/UserInput';
import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside constructor", props);
    this.state = {
      persons : [
        { id: 'faf343', name: "Jane Doe", age: 22 },
        { id: 'sgf342', name: "John Doe", age: 25 },
        { id: 'ggret3', name: "Ashok Kumar", age: 21 }
      ],
      username : "Username",
      showPersons: false,
      validationText: "",
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[UPDATE App.js] Inside shouldComponentUpdate", nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons ||
  //     nextState.username !== this.state.username ||
  //     nextState.validationText !== this.state.validationText;
  // }

  componentWillUpdate(nextProps,nextState) {
    console.log("[UPDATE App.js] Inside componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate");
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});
  }

  usernameChangedHandler = (event) => {
    this.setState( {
      username: event.target.value
    });
  }

  togglePersonsHandler = () => {
    const isShowing = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !isShowing,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  userInputHandler = (event) => {
    const text = event.target.value;
    this.setState( {
      validationText:text
    });
  }

  deleteCharHandler = (charIndex) => {
    const chars = this.state.validationText.split('');
    chars.splice(charIndex, 1);
    const updatedChars = chars.join('');
    this.setState({
      validationText: updatedChars
    })
  }

  render() {
    console.log("[App.js] Inside render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div> );
    }

    const charList = (
      <div>
        {this.state.validationText.split('').map((ch, index) => {
          return <Char
          click={() => this.deleteCharHandler(index)}
          key={index}
          char={ch} />
        })}
      </div>
    )

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
        <div>
          <input type="text" onChange={this.userInputHandler} value={this.state.validationText}/>
          <p>Length: {this.state.validationText.length}</p>
          <Validation length={this.state.validationText.length}/>
          {charList}
        </div>
        <UserInput
          username={this.state.username}
          changed={this.usernameChangedHandler} />
        <UserOutput
          username={this.state.username}/>
        <UserOutput
          username={this.state.username}/>
        <UserOutput
          username={this.state.username}/>
        <UserOutput
          username={this.state.username}/>
      </WithClass>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I hope it works now'));
  }
}

export default App;
