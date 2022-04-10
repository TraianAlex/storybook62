// @ts-nocheck
import React, { useState } from 'react';
import { DateTime } from 'luxon';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

//import { SimpleDateTime } from './SimpleDateTime';

const options = [
  { value: '1', label: 'Today' },
  { value: '2', label: 'Yesterday' },
  { value: '7', label: 'Last 7 days' },
  { value: '30', label: 'Last 30 days' },
  { value: '180', label: 'Last 6 months' },
];

export const Main = () => {
  const [dateBack, setDateBack] = useState(+options[3].value);
  const date = new DateTime.local();

  const filterResult = Array(dateBack)
    .fill()
    .map((_, i) => date.plus({ days: -i }));

  const handleChange = (selectedOption) => {

    setDateBack(+selectedOption.value);
  }

  const uploadData = (date) => {
    console.log('upload', date.toJSDate().toISOString());
  };

  return (
    <div>
      <Select options={options} onChange={handleChange} />
      <div>
        {filterResult.map((date) => (
          <div
            key={date.toJSDate().toISOString()}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div>
              <span>{date.toFormat('LLLL d yyyy')} </span>
              <span>{} </span>
              <span>{}</span>
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
      {/* <SimpleDateTime /> */}
    </div>
  );
};
