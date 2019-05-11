# Flip-Card-Build-In-React.js-
A simple react application

Here’s the basic markup we’ll need:

```  <div className="content">
        <div className="front">
          Front
         </div>
        <div className="back">
          Back!
        </div>
      </div>
```
 
 
 Let’s add a CSS3 transition so users can see the transform take effect.

``` 
.content {
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
  transition: transform 1s;
  transform-style: preserve-3d;
}

.hover-on .content {
  transform: rotateY(180deg);
  transition: transform 0.5s;
}

.front,
.back {
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;
  line-height: 300px;
  color: #00a896;
  text-align: center;
  font-size: 60px;
  border-radius: 5px;
  backface-visibility: hidden;
}
```

### H3
Those are the main functions witch control the hover effect and color value.

``` 
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
 ``` 
 
 ### H4 Main Element 
 In this element are the events which are used for a generated Flip effect
 
 ``` 
  <div className={this.state.colorStyle} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
 ``` 

 This div control the class color witch it's from 1 to 4 and that value, it's sent via props from Radio input Component. With onMouserEnter and onMouseLeave we adding a toggle class between the hover-on and hover-off.
 
