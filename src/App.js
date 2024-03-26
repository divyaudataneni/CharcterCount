import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  state = {inputText: '', list: [], isInput: false}

  onEnterText = event => {
    this.setState({inputText: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {inputText, list} = this.state
    const newItem = {
      id: uuidv4(),
      text: inputText,
    }
    this.setState({list: [...list, newItem], isInput: true, inputText: ''})
  }

  render() {
    const {inputText, isInput, list} = this.state

    return (
      <div className="main-cont">
        <div className="count-cont">
          <h1 className="count-heading">Count the characters like a Boss...</h1>
          {isInput ? (
            <ul>
              {list.map(each => (
                <li key={each.id}>
                  <p>
                    {each.text} : {each.text.length}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="img-cont"
            />
          )}
        </div>
        <div className="input-cont">
          <h1>Character Counter</h1>
          <form className="input">
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input-text"
              onChange={this.onEnterText}
              value={inputText}
            />
            <button type="submit" className="btn" onClick={this.onAdd}>
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
