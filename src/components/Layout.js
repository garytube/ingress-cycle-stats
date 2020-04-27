import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
    font-family: 'oswald', serif;
    background-color: #111111;
    color: #04eaf5;
  }

`

const Grid = styled.div`
display: grid;
max-width: 900px;
margin: 0 auto;
grid-template-rows: auto auto auto;
`


export default function Layout({ children }) {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Coda:400,700" />
        <link href='https://fonts.googleapis.com/css?family=Oswald:400' rel='stylesheet' />
      </Helmet>

      <Grid>
        <header> </header>
        <main>{children}</main>
        <footer>
          © {currentYear}, Built by <a href="https:/besmurf.de" target="_blank" rel="noopener noreferrer">Besmurf</a>
        </footer>
      </Grid>
    </>
  )
}
