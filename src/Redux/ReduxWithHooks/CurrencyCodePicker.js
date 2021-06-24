import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  updateCurrencyCode,
  getCurrencyCode,
  getSupportedSymbols,
} from "./reducers/RateReducer";

export function CurrencyCodePicker() {
  const dispatch = useDispatch();
  const currencyCode = useSelector(getCurrencyCode);
  const supportedSymbols = useSelector(getSupportedSymbols);

  return (
    <Select
      value={currencyCode}
      onChange={(e) => dispatch(updateCurrencyCode(e.target.value))}
    >
      {supportedSymbols.map((code) => (
        <option value={code}>{code}</option>
      ))}
    </Select>
  );
}

const Select = styled.select`
  background: none;
  color: rgb(0 0 0 / 50%);
  border-color: rgb(0 0 0 / 50%);
  border-radius: 0.75em;
  padding: 0.25em;
  vertical-align: middle;
`;
