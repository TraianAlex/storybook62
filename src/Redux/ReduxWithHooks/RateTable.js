import { useSelector } from "react-redux";
import styled from "styled-components";
import { getAmount, getRates } from "./reducers/RateReducer";

export function RateTable() {
  const amount = useSelector(getAmount);
  const rates = useSelector(getRates);

  return (
    <Table className="ExchangeRate-table">
      <tbody>
        {Object.entries(rates).map(([code, rate]) => {
          // NOTE: normally avoid floating point math in JS
          const exchangeAmount = amount * rate || 0.0;
          return (
            <tr key={code}>
              <td>{code}</td>
              <td>
                {exchangeAmount.toLocaleString("en", {
                  style: "currency",
                  currency: code,
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

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
