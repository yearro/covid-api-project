import React, { createContext, useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const CovidCountryDataContext = createContext();

const CovidCountryDataContextProvider = ({ children }) => {
  const domain = 'https://api.covid19api.com'
  const statisticsType = ['confirmed', 'recovered', 'deaths']
  const [confirmedData, setConfirmedData] = useState(0)
  const [recoveredData, setRecoveredData] = useState(0)
  const [deathsData, setDeathsData] = useState(0)
  const [countryName, setCountryName] = useState('')
  const [doneCountryData, setDoneCountryData] = useState(false)
  const [countryCode, setCountryCode] = useState('')
  const [noCountryInformation, setNoCountryInformation] = useState(false)
  let { slug } = useParams()

  useEffect(() => {
    statisticsType.map(type => {
      getCountryData(slug, type)
    })
  }, [])

  const calculateDate = (dateFor) => {
    const newDate = new Date(dateFor)
    return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
  }

  const dateFrom =  calculateDate(new Date().getTime() - 24*60*60*1000)
  const dateTo = calculateDate(new Date())

  const getCountryData = (slug, type) => {
    axios.get(`${domain}/country/${slug}/status/${type}?from=${dateFrom}T00:00:00Z&to=${dateTo}T00:00:00Z`)
      .then(({ data }) => {
        if(data.length) {
          const { Country ,Cases, CountryCode } = data[0]
          switch(type) {
            case 'confirmed':
              setConfirmedData(Cases)
              setCountryName(Country)
              setCountryCode(CountryCode)
              break
            case 'recovered':
              setRecoveredData(Cases)
              break
            default:
              setDeathsData(Cases)
              setDoneCountryData(true)
          }
        } else {
          setNoCountryInformation(true)
          setDoneCountryData(true)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <CovidCountryDataContext.Provider value={{
      confirmedData,
      recoveredData,
      deathsData,
      countryName,
      doneCountryData,
      countryCode,
      noCountryInformation }}>
      {children}
    </CovidCountryDataContext.Provider>
  )
}

export default CovidCountryDataContextProvider