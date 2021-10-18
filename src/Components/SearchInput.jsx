import React,{useState} from 'react'

const SearchInput = ({ handleSubmit, handleSearch  }) => {
  const [Input, setInput] = useState("");

  const searchHandler = (event) => {
    setInput(event.target.value);
    handleSearch(event.target.value);
  };
  let onSubmit = (event) => {
    handleSearch(Input);
    handleSubmit(Input);
    event.preventDefault();
    setInput("");
  };
  return (
    <div className="search">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="search"
          placeholder="favourite ingredient..."
          onChange={searchHandler}
          value={Input}
        />
        <button>search</button>
      </form>
    </div>
  );
};

export default SearchInput
