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
    cities:"Indore"
  }

  myEventCall = (event) => {
    this.setState({
      cities: event.target.value
    });
  }

  render(){
    return(
      <header>
        <div className="logo">NOVEL CORONA VIRUS INFORMATION BUREAU.</div>
        <input  type="text"
                onChange={(e) => this.myEventCall(e)}/>
        <div>
          <h2>Cities Affecting</h2>
          <p>{this.state.cities}</p>
        </div>
      </header>
    )
  }
}

export default Header;