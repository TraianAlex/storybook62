import React from 'react';
import Members from './members';

export default function House({ family }) {
  return (
    <div className="mt-3">
      <h1>{family.name}</h1>
      <Members members={family.members} />
    </div>
  );
}
