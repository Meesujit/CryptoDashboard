import React from 'react'

import {Routes, Route, Link} from 'react-router-dom'

import {
  NavbarComponent,
  Home,
  CryptoDetails,
  Cryptocurrencies,
  Exchanges,
  News} from './components'

import {Wrapper, Main, Navbar, Footer} from './styles/styledMain'

import {Layout} from './styles/styledLayout'

const App = () => {
  return (
    <Wrapper className='wrapper'>
      <Navbar className="navbar">
          <NavbarComponent />
      </Navbar>
      <Main className="main">
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Home />} />

              <Route exact path='/exchanges' element={<Exchanges />} />
              
              <Route exact path='/cryptocurrencies' element={ <Cryptocurrencies />} />                
              
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
      <Footer className="footer">
        <p>
          Cryptocurrency © All rights reserved
        </p>
        <ul>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/exchanges' >Exchanges</Link>
          </li>
          <li>
            <Link to='/news' >news</Link>
          </li>
        </ul>
      </Footer>
      </Main>
    </Wrapper>
  )
} 

export default App