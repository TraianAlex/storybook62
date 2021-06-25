import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getAmount, changeAmount } from './reducers/RateReducer';

export const AmountField = () => {
  const dispatch = useDispatch();
  const amount = useSelector(getAmount);

  const onChange = (e) => dispatch(changeAmount(e.target.value));

  return (
    <Form>
      <Input type="text" value={amount} onChange={onChange} />
    </Form>
  );
};

const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const Input = styled.input`
  font-size: 2.8em;
  background: none;
  border: none;
  font-family: 'Orbitron', sans-serif;
  color: rgb(0 0 0 / 50%);
  text-align: center;
  max-width: 100%;
`;
