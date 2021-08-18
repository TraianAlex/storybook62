import React from 'react';
import useFetch from './useFetch';
import House from './house';

export default function SearchBar() {
  const { data, setData } = useFetch();

  return (
    <main>
      <p>
        Try{' '}
        <span onClick={() => setData({ ...data, slug: 'targaryen' })}>
          targaryen
        </span>
        ,{' '}
        <span onClick={() => setData({ ...data, slug: 'lannister' })}>
          lannister
        </span>
      </p>
      <input
        type="search"
        placeholder="Type your favorite house"
        className="w-25"
        value={data.slug}
        onChange={(e) => setData({ ...data, slug: e.target.value })}
      />
      <br />
      {data.results.length > 0 ? <House family={data.results[0]} /> : null}
    </main>
  );
}
