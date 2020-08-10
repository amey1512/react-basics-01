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
  render(){
    const styles = {
      header: {
        background:'red'
      },
      logo:{
        color:'#c69fc4',
        textAlign:'center'
      }
    }

    return(
      <header style={styles.header}>
        <div style={styles.logo}>LOGO</div>
        <input type="text"/>
      </header>
    )
  }
}

export default Header;