import React, {useEffect, useState} from 'react'
import millify  from 'millify'
import { Link } from 'react-router-dom'
import {useGetCryptosQuery} from '../services/cryptoApi'

import { 
  CryptoCardContainer,
  CryptoCard, 
  Card,
  SearchCrypto,
  Input
} from '../styles/styledCryptocurrencies'

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data: cryptoList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState([]);

  // filtering the cryptos based on the search term
  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((currency) => currency.name.toLowerCase().includes(searchTerm))

      setCryptos(filteredData)
  }, [cryptoList, searchTerm])

  if(isFetching) return 'Loading...'

  return (
    <>
    {!simplified && (
      <SearchCrypto>
        <Input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search Cryptocurrency" />
      </SearchCrypto>
    )}
      <CryptoCardContainer className='crypto-card-container'>
        {cryptos?.map((currency, index) => (
          <CryptoCard className='crypto-card' key={currency.uuid || index}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card title={`${currency.rank}, ${currency.name}`}
              >
                <p>{currency.symbol}</p>
                <p>{currency.name}</p>
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Chnage: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </CryptoCard>
        ))}
      </CryptoCardContainer>
    </>
  )
}

export default Cryptocurrencies