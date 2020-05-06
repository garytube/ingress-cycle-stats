import styled, { css } from "styled-components"

export const COLOR_RESISTANCE = "#04eaf5"
export const COLOR_ENLIGHTENED = "#04ff46"
export const COLOR_WARNING = "#ffff00"
export const COLOR_DANGER = "#ff0047"

export const YearWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ScoreBlock = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  position:relative;
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

  ${props =>
    props.winner === "res" &&
    css`
      background: ${COLOR_RESISTANCE};
    `}
  ${props =>
    props.winner === "enl" &&
    css`
      background: ${COLOR_ENLIGHTENED};
    `}

  ${props =>
    props.sitrep &&
    css`
      &:before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        top: 8px;
        background: rgba(17, 17, 17, 0.4);
        left: 0;
        right: 0;
        margin: auto;
      }
    `}



`

export const Title = styled.h2`
  font-family: "oswald", serif;
  display: block;
  margin: 0.5em 0;
  font-size: 1.425rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 100%;
`
export const Subtitle = styled.div`
  color: #777;
  font-weight: 300;
`

export const ActiveScoreBox = styled.div`
  text-align: center;
  margin: 1rem auto;
`

export const ScoreNumber = styled.span`
  padding: 0.1em 0.25em;
  font-size: 21px;
  border-radius: 0;
  letter-spacing: 0.1em;
  font-weight: 300;
  font-family: "coda";
`

export const ScoreRes = styled(ScoreNumber)`
  color: ${props => (props.winner ? "#000000" : COLOR_RESISTANCE)};
  background: ${props => (props.winner ? COLOR_RESISTANCE : "transparent")};
`

export const ScoreEnl = styled(ScoreNumber)`
  color: ${props => (props.winner ? "#000000" : COLOR_ENLIGHTENED)};
  background: ${props => (props.winner ? COLOR_ENLIGHTENED : "transparent")};
`

export const ChartGrid = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-auto-flow: row;
  grid-gap: 10px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-gap: 20px 30px;
    grid-template-columns: 400px 400px;
  }
`
export const Chart = styled.div`
  display: block;
  margin: 1em auto;
`

export const ChartSpacer = styled.div`
  height: ${props => (props.height ? props.height : "100px")};
  width: ${props => (props.width ? props.width : "100%")};
  margin: 10px auto 5px auto;
`

const type = color => {
  switch (color) {
    case "res":
      return `color: ${COLOR_RESISTANCE}; background: ${COLOR_RESISTANCE}14;`
    case "enl":
      return `color: ${COLOR_ENLIGHTENED}; background: ${COLOR_ENLIGHTENED}14;`
    case "warning":
      return `color: ${COLOR_WARNING}; background: ${COLOR_WARNING}14;`
    case "danger":
      return `color: ${COLOR_DANGER}; background: ${COLOR_DANGER}14;`
    default:
      return `color: rgb(117, 117, 117); background: rgba(117, 117, 117, 0.2);`
  }
}

export const Button = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: "oswald";
  padding: 0.5em 0.6em;
  margin: 0 0.2rem 0.2rem 0;
  display: inline-block;
  text-decoration: none !important;
  background: rgba(117, 117, 117, 0.2);
  color: rgb(117, 117, 117);
  font-size: 14px;
  border: 1px solid transparent;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: inherit;
  }

  ${({ color }) => type(color)}
`

export const Sitrep = styled.div`
  background: rgba(51, 122, 183, 0.05);
  padding: 1em 2em;
  font-size: 14px;
  color: #dadada;
  line-height: 1.6em;
  margin-bottom: 2rem;
`
