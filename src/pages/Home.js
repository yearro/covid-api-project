import React, { useContext } from "react";
import Search from '../components/search/search'
import TotalCovidData from '../components/totalDataBar/totalDataBar'
import Spinner from "../components/spinner/spinner";
import { CovidDataContext } from '../contexts/GeneralContext'

const Home = () => {
  const {
    doneFetchGlobalData,
    globalCovidData,
    countries,
    doneFetchCountries
  } = useContext(CovidDataContext)
  return(
    <>
      {
        doneFetchGlobalData ? <TotalCovidData totalNumbers={globalCovidData}/> : <Spinner />
      }
      {
        doneFetchCountries ? <Search countries={countries} /> : <Spinner />
      }
    </>
  )
}

export default Home