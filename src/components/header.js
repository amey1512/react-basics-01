import React from 'react';

const Header = (data) => {
  return(                         
    <header>
      <div className="logo">NOVEL CORONA VIRUS INFORMATION BUREAU.</div>
      <input  type="text"
              onChange={(e) => data.method(e)}/>
      <div>
        <h2>Vaccine is out from Russia.</h2>
      </div>
    </header>
  )
}


export default Header;