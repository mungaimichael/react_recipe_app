import React from 'react'
import SearchInput from './SearchInput'

const Header = ({ handleSubmit, handleSearch  }) => {
  return (
    <header>
      <div className="logo">
        <h1>recipe app</h1>
        <span>
          <h5>your friendly meal assistant</h5>
        </span>
      </div>
      <SearchInput 
      handleSubmit={handleSubmit} 
      handleSearch={handleSearch}
      />
    </header>
  );
};

export default Header
