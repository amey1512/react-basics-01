import React from 'react';

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

export default Header;