import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'
import './search.scss'

const Search = ({
  countries
}) => {
  const [filterCountries, setFilterCountries] = useState(countries)

  const filterCountryList = (env) => {
    const countryName = env.target.value
    if(countryName.trim().length > 0) {
      const filterName = countryName.trim().toLowerCase()
      const result = filterCountries.filter(item => item.Country.toLowerCase().includes(filterName))
      setFilterCountries(result)
    } else {
      setFilterCountries(countries)
    }
  }
  const handleChange = useCallback(
    debounce(filterCountryList, 600)
  , [])

  const redirectCountry = (countrySlug) => {
    window.location.href = `/#/${countrySlug}/country`
  }

  return (
   <>
    <div className='hero is-danger'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <div className='search-container'>
            <div className='field is-grouped'>
              <p className='control is-expanded'>
                <input
                  className='input'
                  id='countries'
                  onChange={handleChange}
                  placeholder='Filter country list'
                >
                </input>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <article className='search-container_countries'>
      {
        filterCountries.map((country, ind) => {
          return <button key={ind} className='button is-normal' onClick={() => redirectCountry(country.Slug)}>{country.Country}</button>
        })
                   
      }
    </article>
  </>
  )
}

Search.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      Country: PropTypes.string,
      ISO2: PropTypes.string,
      Slug: PropTypes.string
    })
  ),
};

export default Search