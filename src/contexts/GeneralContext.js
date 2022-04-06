import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const CovidDataContext = createContext();

const CovidDataContextProvider = ({ children }) => {
  const domain = 'https://api.covid19api.com'
  const [doneFetchGlobalData, setDoneFetchGlobalData] = useState(false)
  const [globalCovidData, setGlobalCovidData] = useState({})
  const [doneFetchCountries, setDoneFetchCountries] = useState(false)
  const [countries, setCountries] = useState({})

  useEffect(() => {
    getGlobalData()
    getCountries()
  }, []);

  const getGlobalData = () => {
    axios.get(`${domain}/summary`)
      .then(({ data }) => {
        setGlobalCovidData(data.Global)
        setDoneFetchGlobalData(true)
      })
      .catch(err => {
        console.log(err)
      })
    }

  const getCountries = () => {
    axios.get(`${domain}/countries`)
      .then(({ data }) => {
        setCountries(data)
        setDoneFetchCountries(true)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <CovidDataContext.Provider value={{ doneFetchGlobalData, globalCovidData, countries, doneFetchCountries }}>
      {children}
    </CovidDataContext.Provider>
  )
}

export default CovidDataContextProvider