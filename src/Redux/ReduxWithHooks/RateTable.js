import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getAmount, getRates } from './reducers/RateReducer';
import { getName } from './reducers/UserReducer';

export const RateTable = () => {
  const amount = useSelector(getAmount);
  const rates = useSelector(getRates);
  const name = useSelector(getName);

  return (
    <Table className="ExchangeRate-table">
      <tbody>
        {Object.values(rates).map(({code, rate}) => { // 1 Object.entries(rates).map(([code, rate]) // 2 - 3 rates.map(({code, rate})
          // NOTE: normally avoid floating point math in JS
          const exchangeAmount = amount * rate || 0.0;
          return (
            <tr key={code}>
              <td>{code}</td>
              <td>
                {exchangeAmount.toLocaleString('en', {
                  style: 'currency',
                  currency: code,
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>Prepared for {name}</td>
        </tr>
      </tfoot>
    </Table>
  );
};

const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  td {
    padding-bottom: 1em;
  }
  td:nth-of-type(1) {
    padding-right: 2.5em;
  }
  td:nth-of-type(2) {
    padding-left: 2.5em;
  }
`;
