import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../components/spinner/spinner'
import CountryInfo from '../components/countryInformation/countryInformation'
import { CovidCountryDataContext } from '../contexts/CountryContext'

const Country = () => {
  const {
    confirmedData,
    recoveredData,
    deathsData,
    countryName,
    doneCountryData,
    countryCode,
    noCountryInformation
  } = useContext(CovidCountryDataContext)

  return (
    <>
      <nav className='breadcrumb' aria-label='breadcrumbs'>
        <ul>
          <li>
            <Link to="/" className="header-logo">
              All countries
            </Link>
          </li>
          <li className='is-active'><a href="#" aria-current="page">{countryName}</a></li>
        </ul>
      </nav>
      {
        !doneCountryData ? <Spinner /> :
          !noCountryInformation ?
            <CountryInfo
              countryCode={countryCode}
              countryName={countryName}
              confirmedData={confirmedData}
              recoveredData={recoveredData}
              deathsData={deathsData}
            /> : <article className='message is-danger'>
                  <div className='message-body'>
                  There is no current information about the selected country. <strong>Select another</strong>
            </div>
          </article>
      }
    </>
  )
}

export default Country