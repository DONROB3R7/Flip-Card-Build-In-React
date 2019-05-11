import React , {Component} from 'react';
import Card from "./Component/Card.js";
import RadioInput  from "./Component/Radio-input.js";
import './App.css';


class App extends Component{
  constructor(props){
    super(props);

    this.state={
      hover: false,
      colorStyle: 'color-1',
    }
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
}

  hoverOn(){
  this.setState({ hover: true });
  }

  hoverOff() {
    this.setState({ hover: false });
  }

  colorChange = (colorStyle) =>{
    console.log(colorStyle + "From Here")
    this.setState({
      colorStyle: colorStyle,
    })
  }


  render(){
    return (
      <div>
         <RadioInput colorChange={this.colorChange} checked={this.state.colorStyle === 'color-1' ? true : false}/>
         <div className={this.state.colorStyle} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
          <Card name={this.state.hover ? "hover-on" : "hover-off"} />
         </div>
       </div>
    )
  }
}





export default App;
