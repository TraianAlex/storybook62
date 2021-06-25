import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeCurrencyCode } from './reducers/RateReducer';
import { RateTable } from './RateTable';
import { CurrencyCodePicker } from './CurrencyCodePicker';
import { AmountField } from './AmountField';

export const ExchangeRate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrencyCode());
  }, [dispatch]);

  return (
    <StyledContainer>
      <Section>
        <ExchangeHeader>
          Exchange Rates <CurrencyCodePicker />
        </ExchangeHeader>
      </Section>
      <Section>
        <AmountField />
      </Section>
      <Section>
        <RateTable />
      </Section>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  color: rgb(0 0 0 / 50%);
  font-family: 'Orbitron', sans-serif;
  background-image: linear-gradient(
    to bottom,
    rgb(114, 114, 186),
    rgb(170, 232, 232)
  );
  background-attachment: fixed;
`;

const ExchangeHeader = styled.h1`
  margin: 0;
  padding: 0;
  display: block;
  text-align: center;
`;

const Section = styled.section`
  padding: 1em;
  + section {
    border-top: 1px solid rgba(50, 40, 0, 0.3);
  }
`;
