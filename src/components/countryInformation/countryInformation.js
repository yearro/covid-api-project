import React from 'react'
import ReactCountryFlag from "react-country-flag"
import './countryInformation.scss'
import PropTypes from 'prop-types';

const countryInformation = ({
  countryCode,
  countryName,
  confirmedData,
  recoveredData,
  deathsData
}) => {
  const numberFormat = Intl.NumberFormat('en-US')
  return (
    <div>
      <h1 className='title has-text-centered'>
        <ReactCountryFlag
            svg
            style={{
              fontSize: '2em',
              lineHeight: '2em',
            }}
            countryCode={countryCode}
          /> {countryName}
      </h1>
      <div className='information-container'>
        <div className='information-card'>
          <div className='information-card-image_confirmed information-card-image'></div>
          <h2 className='information-card-title'>
            Total Confirmed
          </h2>
          <div className='information-card-number'>
            {numberFormat.format(confirmedData) || ''}
          </div>
        </div>
        <div className='information-card'>
          <div className='information-card-image_deaths information-card-image'></div>
          <h2 className='information-card-title'>
            Total Deaths
          </h2>
          <div className='information-card-number'>
            {numberFormat.format(deathsData) || ''}
          </div>
        </div>
        <div className='information-card'>
          <div className='information-card-image_recovered information-card-image'></div>
          <h2 className='information-card-title'>
            Total Recovered
          </h2>
          <div className='information-card-number'>
            {numberFormat.format(recoveredData) || ''}
          </div>
        </div>
      </div>
    </div>
  )
}

countryInformation.propTypes = {
  countryCode: PropTypes.string,
  countryName: PropTypes.string,
  confirmedData: PropTypes.number,
  recoveredData: PropTypes.number,
  deathsData: PropTypes.number
}
export default countryInformation