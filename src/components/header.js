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

  myEventCall(e){
    console.log(e.target.value);
    console.log("HEY");
  }

  render(){
    return(
      <header>
        <div className="logo">LOGO</div>
        <input  type="text"
                onChange={(e)=>this.myEventCall(e)}/>
      </header>
    )
  }
}

export default Header;