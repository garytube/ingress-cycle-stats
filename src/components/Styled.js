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
  padding: 0.25em 0.5em;
  font-size: 21px;
  border-radius: 0;
  letter-spacing: 0.1em;
  font-weight: 300;
  font-family: 'coda';
`