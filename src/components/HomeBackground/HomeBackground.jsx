import {HomeBackgroundImage, InfoContainer, Tutorial, IconPlayContainer, Svg,TutorialTitle, TextTutorial, Calories, IconRunManContainer, SvgRunMan, TitleRunMan, SpanRunMan} from './HomeBackgroung.styled'
import sprite from 'images/sprite/sprite.svg';

export const HomeBackground = () => {
    return (
    <HomeBackgroundImage>
          <InfoContainer>
            <Tutorial>
              <IconPlayContainer>
                <Svg>
                  <use href={`${sprite}#icon-Polygon-1`}></use>
                </Svg>
              </IconPlayContainer>
              <TutorialTitle>
                350+ <TextTutorial>Video tutorial</TextTutorial>
              </TutorialTitle>
            </Tutorial>
            <Calories>
              <IconRunManContainer>
                <SvgRunMan>
                  <use href={`${sprite}#icon-running-stick-figure`}></use>
                </SvgRunMan>
              </IconRunManContainer>
              <TitleRunMan>
                500 <SpanRunMan>cal</SpanRunMan>
              </TitleRunMan>
            </Calories>
          </InfoContainer>
        </HomeBackgroundImage>
)
}