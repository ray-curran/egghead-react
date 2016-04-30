import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: ''
    }
    this.update = this.update.bind(this);
  }
  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output: babel.transform(code, {
          stage: 0,
          loose: 'all'
        }).code,
        err: ''
      })
    }
    catch(err) {
      this.setState({err: err.message})
    }
  }
  render() {
    return (
        <div>
          <header>{this.state.err}</header>
          <div className="container">
            <textarea
            onChange={this.update}
            defaultValue={this.state.input}></textarea>
            <pre>
              {this.state.output}
            </pre>
          </div>
        </div>
      )
  }
}

export default App





// import React from 'react';
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {data: [
//       {id: 1, name: 'Sabri'},
//       {id: 2, name: 'suchie'},
//       {id: 3, name: 'kurt'},
//       {id: 4, name: 'tiffany'},
//       {id: 5, name: 'ray'}
//       ]}
//   }

//   render(){
//     let rows = this.state.data.map( person => {
//       return <PersonRow key={person.id} data={person} />
//     })
//     return <table>
//       <tbody>{rows}</tbody>
//     </table>
//   }
// }

// const PersonRow = (props) => {
//   return <tr>
//     <td>{props.data.id}</td>
//     <td>{props.data.name}</td>
//   </tr>
// }

// export default App




// import React from 'react';
// import ReactDOM from 'react-dom';

// let Mixin = InnerComponent => class extends React.Component {
//     constructor() {
//     super();
//     this.update = this.update.bind(this);
//     this.state = {val: 0}
//   }
//   update() {
//     this.setState({val: this.state.val + 1})
//   }
//   render() {
//     return <InnerComponent
//     update={this.update}
//     {...this.state}
//     {...this.props} />
//   }
// }

// const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val}</button>

// const Label = (props) => <label onMouseMove={props.update}>{props.txt} - {props.val}</label>

// let ButtonMixed = Mixin(Button)
// let LabelMixed = Mixin(Label)

// class App extends React.Component {

//   // componentWillReceiveProps(nextProps) {
//   // this.setState({increasing: nextProps.val > this.props.val})
//   // }
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   return nextProps.val % 5 === 0;
//   // }
//   render() {
//     return (
//       <div>
//         <ButtonMixed txt="Button" />
//         <LabelMixed txt="Label" />
//       </div>
//     )
//   }
//   // componentDidUpdate(prevProps, prevState) {
//   //   console.log('prevProps', prevProps)
//   // }
// }

// App.defaultProps = { val: 0 }

// export default App














// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { val: 0};
//     this.update = this.update.bind(this);
//   }
//   update(){
//     this.setState({val: this.state.val +1})
//   }
//   componentWillMount(){
//     this.setState({m: 2})
//   }
//   render(){
//     console.log('rendering!')
//     return <button onClick={this.update}>{this.state.val * this.state.m}</button>
//   }
//   componentDidMount(){
//     this.inc = setInterval(this.update,500)
//   }
//   componentWillUnmount(){
//     clearInterval(this.inc)
//   }
// }

// class Wrapper extends React.Component{
//   constructor(){
//   super();
//   }
//   mount(){
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render() {
//     return(
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id="a">something is here</div>
//       </div>
//     )
//   }
// }

// export default Wrapper








// import React from 'react';
// import ReactDom from 'react-dom';
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { val: 0};
//     this.update = this.update.bind(this);
//   }
//   update(){
//     this.setState({val: this.state.val +1})
//   }
//   componentWillMount(){
//     console.log('mounting!')
//   }
//   render(){
//     console.log('rendering!')
//     return <button onClick={this.update}>{this.state.val}</button>
//   }
//   componentDidMount(){
//     console.log('mounted')
//   }
//   componentWillUnmount(){
//     console.log('bye!')
//   }
// }

// class Wrapper extends React.Component{
//   constructor(){
//   super();
//   }
//   mount(){
//     ReactDom.render(<App />, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDom.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render() {
//     return(
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id="a">something is here</div>
//       </div>
//     )
//   }
// }

// export default Wrapper




// import React from 'react';
// class App extends React.Component {
//   render(){
//     return <Button>I <Heart/> React</Button>
//   }
// }

// class Button extends React.Component {
//   render() {
//     return <button>{this.props.children}</button>
//   }
// }

// const Heart =() => <span className="glyphicon glyphicon-heart"></span>

// export default App













// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       red: 0,
//       green: 0,
//       blue: 0,
//       yellow: 0
//     };
//     this.update = this.update.bind(this);
//   }
//   update(e){
//     this.setState({
//       red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
//       green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
//       blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
//       yellow: ReactDOM.findDOMNode(this.refs.yellow.refs.inp).value
//     })
//   }
//   render() {
//     // let txt = this.props.txt
//     return (
//       <div>
//         <Slider ref="red" update={this.update} />
//         {this.state.red}
//         <br />
//         <Slider ref="blue" update={this.update} />
//         {this.state.blue}
//         <br />
//         <Slider ref="green" update={this.update} />
//         {this.state.green}
//         <br />
//         <Slider ref="yellow" update={this.update} />
//         {this.state.yellow}
//         <br />
//         </div>
//       )
//   }
// }

// class Slider extends React.Component {
//   render() {
//   return (
//     <div>
//         <input ref="inp" type="range"
//         min="0"
//         max="255"
//           onChange={this.props.update} />
//       </div>
//     )
//   }
// }

// // const Widget = (props) => {
// //   return (
// //     <div>
// //         <input type="text"
// //           onChange={props.update} />
// //         <h1>{props.txt}</h1>
// //         <b>Bold</b>
// //       </div>
// //     )
// // }

// // App.propTypes = {
// //   txt: React.PropTypes.string,
// //   cat: React.PropTypes.number.isRequired
// // }

// // App.defaultProps = {
// //   txt: 'hai hai'
// // }


// // const App = () =><h1>Hello Egheads</h1>

// export default App