import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getAmount, amountChanged } from "./reducers/RateReducer";

export function AmountField() {
  const dispatch = useDispatch();
  const amount = useSelector(getAmount);

  function onChange(e) {
    let newAmount = e.target.value;
    dispatch(amountChanged(newAmount));
  }

  return (
    <Form>
      <Input type="text" value={amount} onChange={onChange} />
    </Form>
  );
}

const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const Input = styled.input`
  font-size: 2.8em;
  background: none;
  border: none;
  font-family: "Orbitron", sans-serif;
  color: rgb(0 0 0 / 50%);
  text-align: center;
  max-width: 100%;
`;
