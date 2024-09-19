import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
import {useGetCryptoHistoryQuery} from '../services/cryptoApi';


import { MdOutlineMoney, MdOutlineCheckCircle, MdCheckCircleOutline } from 'react-icons/md';
import { AiOutlineDollar, AiOutlineFund, AiOutlineExclamationCircle, AiOutlineStop, AiOutlineTrophy, AiOutlineThunderbolt } from "react-icons/ai";

import { RiSortNumberDesc } from "react-icons/ri";
import { CoinContainer, CoinDesc, CoinDescLink, CoinDescriptionText, CoinDetailedHeading, CoinDetailsContainer, CoinHeadingContainer, CoinLink, CoinLinkAnchor, CoinName, CoinStats, CoinStatsName, CoinTitle, CoinValueStatitics, CoinValueStatiticsTitle, SelectTimeframe, StatsContainer } from '../styles/styledCryptoDetails';
import HTMLReactParser from 'html-react-parser/lib/index';

import LineChart from './LineChart';

const CryptoDetails = () => {

  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timeperiod });

  console.log(data);
  const cryptoDetails = data?.data?.coin;

  console.log(cryptoDetails);
  if (isFetching) return 'Loading...'

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <AiOutlineDollar /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <RiSortNumberDesc /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <AiOutlineThunderbolt /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <MdOutlineMoney /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <AiOutlineTrophy /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <AiOutlineFund /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MdOutlineCheckCircle /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <MdCheckCircleOutline /> : <AiOutlineStop />, icon: <AiOutlineExclamationCircle /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <AiOutlineExclamationCircle /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <AiOutlineExclamationCircle /> },
  ];



  return (
    <CoinDetailsContainer>
      <CoinHeadingContainer>
        <CoinName>
          {cryptoDetails.name}
          ( {cryptoDetails.symbol} ) Price
        </CoinName>
        <p>
          {cryptoDetails.name} live price in US dollars. View value statistics, market cap and supply.
        </p>
      </CoinHeadingContainer>
      <SelectTimeframe
        defaultValue='7d'
        className='select-timeframe'
        placeholder='select a time period'
        onChange={(value) => setTimeperiod(value)}>
        {time.map((date) => <option key={date}>{date}</option>)}
      </SelectTimeframe>

      {/* LINE CHART GOES HERE */}
      <LineChart 
      coinHistory={coinHistory}  currentPrice={cryptoDetails.price} coinName={cryptoDetails.name}/>

      



      <StatsContainer>

        {/* Statitics of individual coin  */}
        <CoinValueStatitics>
          <CoinValueStatiticsTitle>
            <CoinDetailedHeading>
              {cryptoDetails.name} Value Statistics
            </CoinDetailedHeading>
            <p>
              An overview showing the statistics of {cryptoDetails.name}.
            </p>
          </CoinValueStatiticsTitle>
          {stats.map(({ icon, title, value }) => (
            <CoinStats>
              <CoinStatsName>
                <p>{icon}</p>
                {title}
              </CoinStatsName>
              <p>{value}</p>
            </CoinStats>
          ))}
        </CoinValueStatitics>

        {/* Statitics of all coins  */}
        <CoinValueStatitics>
          <CoinValueStatiticsTitle>
            <CoinDetailedHeading>
              Other Statistics
            </CoinDetailedHeading>
            <p>
              An overview showing the statistics of cryto currency.
            </p>
          </CoinValueStatiticsTitle>
          {genericStats.map(({ icon, title, value }) => (
            <CoinStats>
              <CoinStatsName>
                <p>{icon}</p>
                {title}
              </CoinStatsName>
              <p>{value}</p>
            </CoinStats>
          ))}
        </CoinValueStatitics>
      </StatsContainer>

      {/* Description and Links */}
      <CoinDescLink>
        <CoinDesc>
          <CoinDetailedHeading>
            What is {cryptoDetails.name}?
          </CoinDetailedHeading>
          <CoinDescriptionText>
            {HTMLReactParser(cryptoDetails.description)}
          </CoinDescriptionText>
        </CoinDesc>

        <CoinLink>
          <CoinDetailedHeading>
            {cryptoDetails.name} Links
          </CoinDetailedHeading>

          {cryptoDetails.links.map((link) => (
            <CoinContainer key={link.name}>
              <CoinTitle>{link.type}</CoinTitle>
              <CoinLinkAnchor href={link.url} target='_blank' rel='noreferrer'>
                {link.name}
              </CoinLinkAnchor>
            </CoinContainer>
          ))}

        </CoinLink>
      </CoinDescLink>


    </CoinDetailsContainer>

    // todo 1.41
  )
}


export default CryptoDetails;