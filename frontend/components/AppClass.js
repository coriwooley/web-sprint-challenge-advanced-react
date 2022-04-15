import React from 'react'

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



  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates (2, 2)</h3>
          <h3 id="steps">You moved 0 times</h3>
        </div>
        <div id="grid">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square active">B</div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button id="left">LEFT</button>
          <button id="up">UP</button>
          <button id="right">RIGHT</button>
          <button id="down">DOWN</button>
          <button id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
