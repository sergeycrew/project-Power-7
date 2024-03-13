import {
  Title,
  CardWrapper,
  MetaWrapper,
  Text,
  Button,
  LabelRecommended,
  Decor,
  TopInfoWrapper,
  Caption,
  SvgIcon,
  TitleWrapper,
  SvgArrow,
  DetailsMetaWrapper,
  TextFull,
} from './ProductsItem.styled';
import sprite from '../../images/sprite/sprite.svg';

export const ProductCard = ({
  product: { _id, title, calories, category, weight, recommended = true },
  toggleModal,
}) => {
  return (
    <CardWrapper>
      <TopInfoWrapper>
        <Decor>diet</Decor>
        <LabelRecommended $recommended={recommended}></LabelRecommended>
        <Text>
          <b>{recommended ? 'Recommended' : 'Not recommended'}</b>
        </Text>
        <Button
          onClick={() =>
            toggleModal({ _id, title, calories, category, weight })
          }
        >
          Add
          <SvgArrow>
            <use href={`${sprite}#icon-arrow`}></use>
          </SvgArrow>
        </Button>
      </TopInfoWrapper>

      <TitleWrapper>
        <SvgIcon>
          <use href={`${sprite}#icon-icon`}></use>
        </SvgIcon>
        <Title>{title}</Title>
      </TitleWrapper>

      <MetaWrapper>
        <DetailsMetaWrapper>
          <Caption>Calories:</Caption> <TextFull>{calories}</TextFull>
        </DetailsMetaWrapper>
        <DetailsMetaWrapper>
          <Caption>Category: </Caption> <Text>{category}</Text>
        </DetailsMetaWrapper>
        <DetailsMetaWrapper>
          <Caption>Weight:</Caption> <TextFull>{weight}</TextFull>
        </DetailsMetaWrapper>
      </MetaWrapper>
    </CardWrapper>
  );
};
