// @ts-nocheck
import React, { useState } from 'react';
import { DateTime } from 'luxon';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import { SimpleDateTime } from './SimpleDateTime';

export const options = [
  { value: 1, label: 'Today' },
  { value: 2, label: 'Yesterday' },
  { value: 7, label: 'Last 7 days' },
  { value: 30, label: 'Last 30 days' },
  { value: 180, label: 'Last 6 months' },
];

export const Main = () => {
  const [dateBack, setDateBack] = useState(options[3].value);

  const date = new DateTime.local();
  const filterResult = Array(dateBack)
    .fill()
    .map((_, i) => date.plus({ days: -i }));
  if (dateBack === 2) filterResult.shift();

  const handleChange = (selectedOption) => {
    setDateBack(selectedOption.value);
  };

  const uploadData = (date) => {
    const start = date.set({ hour: 0, minute: 0 }).toJSDate().toISOString();
    const end = date.set({ hour: 24, minute: 0 }).toJSDate().toISOString();
    console.log('upload', start, end, date.toJSDate().toISOString());
  };

  return (
    <div style={{ fontSize: '14px' }}>
      <div style={{ marginBottom: '10px' }}>DateTime with luxon</div>
      <Select options={options} onChange={handleChange} />
      <div style={{ marginTop: '10px' }}>
        {filterResult.map((date, index) => (
          <div
            key={date.toJSDate().toISOString()}
            style={index % 2 ? rowEven : rowOdd}
          >
            <div>
              <span>{date.toFormat('LLLL d yyyy')} </span>
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
      <SimpleDateTime />
    </div>
  );
};

export const rowEven = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '5px',
  backgroundColor: '#f1faee',
};

export const rowOdd = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '5px',
};
