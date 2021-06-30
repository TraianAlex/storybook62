import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const SearchFilter = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = data.filter((val) => {
    if (searchTerm === '') {
      return val;
    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    } else {
      return '';
    }
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <SearchApp>
      <input
        type="text"
        placeholder="Search name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchResults.map((post, key) => {
        return (
          <p className="blog" key={key}>
            {post.title}
          </p>
        );
      })}
    </SearchApp>
  );
};

const SearchApp = styled.div`
  input {
    padding: 10px;
    border: 1px solid #111;
    width: -webkit-fill-available;
    border-radius: 5px;
  }
  .blog {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;
