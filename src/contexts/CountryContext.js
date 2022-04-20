import React, { createContext, useEffect } from "react"
import { useParams } from 'react-router-dom'

import useGetCountryData from "../hooks/useGetCountryData"
export const CovidCountryDataContext = createContext();

const CovidCountryDataContextProvider = ({ children }) => {
  const {
    confirmedData,
    countryName,
    countryCode,
    recoveredData,
    deathsData,
    doneCountryData,
    noCountryInformation,
    getCountryData
  } = useGetCountryData()

  let { slug } = useParams()

  useEffect(() => {
    getCountryData(slug, 'confirmed')
    getCountryData(slug, 'recovered')
    getCountryData(slug, 'deaths')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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