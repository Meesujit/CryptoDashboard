import React from 'react'
import { StatisticComponent } from '../styles/styledHome'

const Statistic = ({title, value}) => {
  return (
    <StatisticComponent>
        <h4>{title}</h4>
        <p>{value}</p>
    </StatisticComponent>
  )
}

export default Statistic