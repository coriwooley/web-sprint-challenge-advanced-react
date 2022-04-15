import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:9000/api/result'

export default class AppClass extends React.Component {
  state = {
    x: 2,
    y: 2,
    steps: 0,
    email: '',
    message: '',
    matrix: [
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ]
  }

  moveUp = () => {
    if (this.state.y === 1) {
      this.setState({
        ...this.state,
        message: "You can't go up"
      })
    } else {
    const newMatrix = [...this.state.matrix]
    newMatrix[this.state.y - 1][this.state.x - 1] = 0
    newMatrix[this.state.y - 2][this.state.x - 1] = 1
    this.setState({
      ...this.state,
      matrix: [...newMatrix],
      y: this.state.y - 1,
      steps: this.state.steps + 1,
      message: ''
    })
  }
  }

  moveDown = () => {
    if (this.state.y === 3) {
      this.setState({
        ...this.state,
        message: "You can't go down"
      })
    } else {
    const newMatrix = [...this.state.matrix]
    newMatrix[this.state.y - 1][this.state.x - 1] = 0
    newMatrix[this.state.y][this.state.x - 1] = 1
    this.setState({
      ...this.state,
      matrix: [...newMatrix],
      y: this.state.y + 1,
      steps: this.state.steps + 1,
      message: ''
    })
  }
  }

  moveLeft = () => {
    if (this.state.x === 1) {
      this.setState({
        ...this.state,
        message: "You can't go left"
      })
    } else {
    const newMatrix = [...this.state.matrix]
    newMatrix[this.state.y - 1][this.state.x - 1] = 0
    newMatrix[this.state.y - 1][this.state.x - 2] = 1
    this.setState({
      ...this.state,
      matrix: [...newMatrix],
      x: this.state.x - 1,
      steps: this.state.steps + 1,
      message: ''
    })
  }
  }


  moveRight = () => {
    if (this.state.x === 3) {
      this.setState({
        ...this.state,
        message: "You can't go right"
      })
    } else {
    const newMatrix = [...this.state.matrix]
    newMatrix[this.state.y - 1][this.state.x - 1] = 0
    newMatrix[this.state.y - 1][this.state.x] = 1
    this.setState({
      ...this.state,
      matrix: [...newMatrix],
      x: this.state.x + 1,
      steps: this.state.steps + 1,
      message: ''
    })
  }
  }

  resetGrid = () => {
    this.setState({
      ...this.state,
      x: 2,
      y: 2,
      steps: 0,
      email: '',
      message: '',
      matrix: [
        [0,0,0],
        [0,1,0],
        [0,0,0]
      ],
 
    })
  }

  changeInput = (evt) => {
    this.setState({
      ...this.state,
      email: evt.target.value
    })
  }

  onSubmit = (evt) => {
    evt.preventDefault()
    axios.post(URL, {...this.state, email: this.state.email})
    .then((res) => {
      this.setState({...this.state, message: res.data.message})
    })
    .catch((err) => {
      this.setState({...this.state, message: err.response.data.message})
    })
    this.setState({...this.state, email:''})
  }



  render() {
    const {x, y, steps, message, matrix, email} = this.state
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({x},{y})</h3>
          <h3 id="steps">You moved {steps} {steps === 1 ? 'time' : 'times'} </h3>
        </div>
        <div id="grid">
          {
            matrix.flatMap(square => square).map((squ, idx) => {
              return <div key={idx} className={`square ${squ === 1 ? 'active' : ''} `}>
                {squ === 1 ? 'B' : ''}
              </div>
            })
          }
        </div>
        <div className="info">
          <h3 id="message">{message}</h3>
        </div>
        <div id="keypad">
          <button onClick={this.moveLeft} id="left">LEFT</button>
          <button onClick={this.moveUp} id="up">UP</button>
          <button onClick={this.moveRight} id="right">RIGHT</button>
          <button onClick={this.moveDown} id="down">DOWN</button>
          <button onClick={this.resetGrid} id="reset">reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.changeInput} value={email} id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
