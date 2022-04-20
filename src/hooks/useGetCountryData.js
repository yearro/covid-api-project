import { useState } from "react";
import axios from "axios";

const useGetCountryData = () => {
  const domain = 'https://api.covid19api.com'
  const [confirmedData, setConfirmedData] = useState(0)
  const [countryName, setCountryName] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [recoveredData, setRecoveredData] = useState(0)
  const [deathsData, setDeathsData] = useState(0)
  const [doneCountryData, setDoneCountryData] = useState(false)
  const [noCountryInformation, setNoCountryInformation] = useState(false)

  const calculateDate = (dateFor) => {
    const newDate = new Date(dateFor)
    return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
  }

  const dateFrom =  calculateDate(new Date().getTime() - 24*60*60*1000)
  const dateTo = calculateDate(new Date())

  async function getCountryData (slug, type) {
    try {
      const response = await axios.get(
        `${domain}/country/${slug}/status/${type}?from=${dateFrom}T00:00:00Z&to=${dateTo}T00:00:00Z`
      )
      const result = response.data
      if(result.length) {
        const { Country ,Cases, CountryCode } = result[0]
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
    } catch (error) {
      console.log(error)
    }
  }
  return {
    confirmedData,
    countryName,
    countryCode,
    recoveredData,
    deathsData,
    doneCountryData,
    noCountryInformation,
    getCountryData
  }
}

export default useGetCountryData