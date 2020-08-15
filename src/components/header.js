import React from 'react';

/* Commented for creating class based component 
const getYear = () => {
  const date = new Date();
  return 'Month-'+date.getMonth()
}
const Header = () => {
  return (
          <div>
            <div>Component-Header</div>
            <p> This is created in {getYear()} </p>
          </div>
        )
}
*/

class Header extends React.Component {

  state = {
    cities:""
    //active:false
  }

  myEventCall = (event) => {
    //const value = event.target.value === '' ? false:true;
    this.setState({
      //active:value,
      cities: event.target.value
    });
  }

  render(){
    
    // const style = {
    //   background : "black",
    //   color:"red"
    // }
    
    // if(this.state.cities !== ''){
    //   style.background="red";
    //   style.color="black";
    // }
    // else{
    //   style.background="black";
    //   style.color="red";
    // }

    return(                         
      <header>
        <div className="logo">NOVEL CORONA VIRUS INFORMATION BUREAU.</div>
        <input  type="text"
                onChange={(e) => this.myEventCall(e)}/>
        <div>
          <h2>Vaccine is out from Russia.</h2>
          <h2>{this.state.cities}</h2>
        </div>
      </header>
    )
  }
}

export default Header;