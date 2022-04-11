// @ts-nocheck
import React, { useState } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const options = [
  { value: 1, label: 'Today' },
  { value: 2, label: 'Yesterday' },
  { value: 7, label: 'Last 7 days' },
  { value: 30, label: 'Last 30 days' },
  { value: 180, label: 'Last 6 months' },
];

export const SimpleDateTime = () => {
  const [dateBack, setDateBack] = useState(options[3].value);

  const filterResult = Array(dateBack)
    .fill()
    .map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date;
    });
  if (dateBack === 2) filterResult.shift();

  const handleChange = (selectedOption) => setDateBack(selectedOption.value);

  const uploadData = (date) => {
    const [month, day, year] = [
      date.getMonth(),
      date.getDate(),
      date.getFullYear(),
    ];
    console.log('upload', date, month + 1, day, year);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ marginBottom: '10px' }}>DateTime simple javascript</div>
      <Select options={options} onChange={handleChange} />
      <div style={{ marginTop: '10px' }}>
        {filterResult.map((date) => (
          <div
            key={date.toDateString()}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div>
              <span>{date.toLocaleString('en-US', { month: 'long' })} </span>
              <span>{date.getDate()} </span>
              <span>{date.getFullYear()}</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faUpload}
                onClick={() => uploadData(date)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
