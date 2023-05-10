import React from "react";

export default function SearchForm({ searchKey, setSearchKey, onSubmit }) {
  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchKey);
  };

  return (
    <form className="container mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search"
        value={searchKey}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary">Search</button>
    </form>
  );
}
