import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

/*
class Square extends React.Component {
  // constructor (props) {
  //   super(props);
  //   // 初始化状态值
  //   this.state = {
  //     value: null
  //   }
  //   // 绑定this为当前实例
  //   this.clickHandle = this.clickHandle.bind(this)
  // }
  // clickHandle (event) {
  //   this.setState({value: 'X'})
  // }
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
*/
// 使用函数组件
function Square (props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 棋盘落子
      squares: Array(9).fill(null),
      // 下一步落子方
      xIsNext: true
    };
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick(i) {
    console.log('click', i)
    const squares = this.state.squares.slice();
    if (squares[i]) {
      return ;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }
  render() {
    let status = 'Next player : ' + (this.state.xIsNext ? 'X' : 'O');
    return (
      <div>
        <div className="status">{status}</div>
        <div className="bord-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="bord-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="bord-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  // constructor() {
  // }
  render() {
    return (
      <div className="game">
          <div className="game-bord">
            <Board />
          </div>
          <div className="game-info">
            <div></div>
            <ol></ol>
          </div>
      </div>
    );
  }
}

ReactDom.render(
  <Game />,
  document.getElementById('root')
);
