import React from "react"
import PropTypes from 'prop-types'
import './totalDataBar.scss'
import graphCured from '../../assets/graph-cured.svg'
import graphDeath from '../../assets/graph-death.svg'
import graphInfected from '../../assets/graph-infected.svg'
const totalCovidData = ({
  totalNumbers
}) => {
  const { TotalConfirmed, TotalDeaths, TotalRecovered, Date: dateString } = totalNumbers
  const processDate = new Date(dateString).toDateString()
  const numberFormat = Intl.NumberFormat('en-US')

  return (
    <>
       <article className='message is-primary'>
        <div className='message-body'>
          General Statistics
        </div>
      </article>
      <div className='level'>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Total Confirmed</p>
            <p className='title'><img className='image-container' src={graphInfected} width='25' height='25' alt='Total confirmed' />{numberFormat.format(TotalConfirmed) || ''}</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Total Deaths</p>
            <p className='title'><img className='image-container' src={graphDeath} width='25' height='25' alt='Total deaths'/>{numberFormat.format(TotalDeaths)}</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Total Recovered</p>
            <p className='title'><img className='image-container' src={graphCured} width='25' height='25' alt='Total recovered'/>{numberFormat.format(TotalRecovered)}</p>
          </div>
        </div>
      </div>
      <article className='message is-link'>
        <div className='message-body'>
        {processDate}
        </div>
      </article>
    </>
  )
}

totalCovidData.propTypes = {
  totalNumbers: PropTypes.shape({
      Date: PropTypes.string,
      NewConfirmed: PropTypes.number,
      NewDeaths: PropTypes.number,
      NewRecovered: PropTypes.number,
      TotalConfirmed: PropTypes.number,
      TotalDeaths: PropTypes.number,
      TotalRecovered: PropTypes.number
    })
};

export default totalCovidData