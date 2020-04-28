import styled, { css } from "styled-components";
import { Link } from 'gatsby';

export const YearWrapper = styled.div`
  display: block;
  clear:both
`

export const ScoreBlock = styled(Link)`
  display: inline-block;
  height: 25px;
  width: 25px;
  padding: 0;
  border: 1px solid black;
  border-bottom: 0;
  &:hover {
    border-color: black;
  };

  ${props => props.winner === 'res' && css`
    background: #04eaf5
  `}
  ${props => props.winner === 'enl' && css`
    background: #04ff46
  `}
`

export const Title = styled.h2`
font-family: 'oswald', serif;
display: block;
margin: 0.5em 0;
font-size: 1.425rem;
text-transform: uppercase;
letter-spacing: 2px;
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
color:  ${props => props.winner ? "#000000" : "#04eaf5"};
background:  ${props => props.winner ? "#04eaf5" : "transparent"};
  `

export const ScoreEnl = styled(ScoreNumber)`
  color:  ${props => props.winner ? "#000000" : "#04ff46"};
  background:  ${props => props.winner ? "#04ff46" : "transparent"};
    `

export const ChartGrid = styled.div`
    display: grid;
    grid-template-columns: 400px 400px;
    grid-auto-flow: row;
    justify-content: center;
    justify-items: center;
    grid-gap: 20px 30px;
  `
export const Chart = styled.div`
    display: block;
  `
