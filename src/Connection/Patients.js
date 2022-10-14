import axios from "axios"
import url from "./Api/api"

const getAllPatients = async () => {
  let res = await axios.get(`${url}/api/patient/getallpatients`)

  console.log(res)
  return res
}

const getPatientScans = async data => {
  let res = await axios.post(`${url}/api/scans/getmyscans`, data)

  console.log(res)
  return res
}

export { getAllPatients, getPatientScans }
