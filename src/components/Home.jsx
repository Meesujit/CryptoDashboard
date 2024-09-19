import React from 'react';
import { Link } from 'react-router-dom';
import millify from 'millify';
import { 
  HomeWrapper, 
  Row, 
  Col, 
  HomeContainer, 
  HomeTitle,
  ShowMoreTitle
} from '../styles/styledHome';

import {Cryptocurrencies, News} from '../components';

import Statistic from './Statistic';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Home = () => {

  const {data, isFetching } = useGetCryptosQuery(10);
 
  const globalStats = data?.data?.stats;

  console.log(data);


  if(isFetching) return 'Loading...';

  if(!globalStats) return 'No data available';

  return (
    <>  
    
    <HomeWrapper>
      <h3>Global Crypto States </h3>
      <Row>
        <Col>
        <Statistic title='Total Cryptocurrencies' value={millify(globalStats.total)} /> </Col>
        <Col>
        <Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} /> </Col>
        <Col>
        <Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} /> </Col>
        <Col>
        <Statistic title='Total 24h Vloume' value={millify(globalStats.total24hVolume)} /> </Col>
        <Col>
        <Statistic title='Total Markets' value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>

      <HomeContainer className='home-heading-container'>
        <HomeTitle className='home-title'>
          <h5>Top 10 Cryptocurrencies in the world</h5>
        </HomeTitle >

        <ShowMoreTitle>
          <Link to='/cryptocurrencies'>Show More</Link>
        </ShowMoreTitle>

      </HomeContainer>
      <Cryptocurrencies simplified />

      <HomeContainer className='home-heading-container'>
        <HomeTitle className='home-title'>
          <h5>Latest Crypto News</h5>
        </HomeTitle >

        <ShowMoreTitle>
          <Link to='/news'>Show More</Link>
        </ShowMoreTitle>

      </HomeContainer>
      <News simplified />

    </HomeWrapper>
    
    
    </>
  )
}

export default Home