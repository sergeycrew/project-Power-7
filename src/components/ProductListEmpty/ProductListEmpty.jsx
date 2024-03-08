import { Attention, Description, Wrapper } from './ProductListEmpty.styled';

export const ProductListEmpty = () => (
  <Wrapper>
    <Description>
      <Attention>Sorry, no results were found </Attention>
      for the product filters you selected. You may want to consider other
      search options to find the product you want. Our range is wide and you
      have the opportunity to find more options that suit your needs.
    </Description>
    <Description>
      <Attention>Try changing the search parameters.</Attention>
    </Description>
  </Wrapper>
);
