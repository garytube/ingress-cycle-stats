import styled, { css } from "styled-components";
import { Link } from 'gatsby';

export const COLOR_RESISTANCE = "#04eaf5"
export const COLOR_ENLIGHTENED = "#04ff46"

export const YearWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ScoreBlock = styled(Link)`
  display: inline-block;
  height: 20px;
  width: 20px;
  padding: 0;
  margin: 1px;
  transition:all 0.5s ease;
  &:hover, &:focus {
    box-shadow: 0 0 10px 2px rgba(0,0,0,0.6), inset 0 0 5px 1px rgba(0,0,0,0.2);
    z-index: 10;
    border-radius: 4px;
    transform: scale(1.3) rotate(142deg);
  }
  @media(min-width: 768px) {
    height: 25px;
    width: 25px;
    }

  ${props => props.winner === 'res' && css`
    background: ${COLOR_RESISTANCE}
  `}
  ${props => props.winner === 'enl' && css`
    background: ${COLOR_ENLIGHTENED}
  `}
`

export const Title = styled.h2`
font-family: 'oswald', serif;
display: block;
margin: 0.5em 0;
font-size: 1.425rem;
text-transform: uppercase;
letter-spacing: 2px;
width: 100%
`

export const ActiveScoreBox = styled.div`
text-align: center;
margin: 1rem  auto;
`

export const ScoreNumber = styled.span`
  padding: 0.1em 0.25em;
  font-size: 21px;
  border-radius: 0;
  letter-spacing: 0.1em;
  font-weight: 300;
  font-family: 'coda';
`



export const ScoreRes = styled(ScoreNumber)`
color:  ${props => props.winner ? "#000000" : COLOR_RESISTANCE};
background:  ${props => props.winner ? COLOR_RESISTANCE : "transparent"};
  `

export const ScoreEnl = styled(ScoreNumber)`
  color:  ${props => props.winner ? "#000000" : COLOR_ENLIGHTENED};
  background:  ${props => props.winner ? COLOR_ENLIGHTENED : "transparent"};
    `

export const ChartGrid = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-auto-flow: row;
    grid-gap: 10px;
    grid-template-columns: 1fr;

    @media(min-width: 768px) {
      grid-gap: 20px 30px;
      grid-template-columns: 400px 400px;
      }
  `
export const Chart = styled.div`
    display: block;
    margin: 1em auto
  `
