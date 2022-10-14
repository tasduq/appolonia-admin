import React, { useEffect, useState } from "react"
import { Container, Spinner } from "reactstrap"
import Patientstable from "./Components/Patienttable"
import Toastbar from "../../components/Toast"
import { ToastContainer, toast } from "react-toastify"

//Import Breadcrumb
import { getAllPatients } from "../../Connection/Patients"
import { Handler } from "leaflet"

const Allpatients = () => {
  let [patients, setPatients] = useState([])
  let handleGetAllPatients = async () => {
    try {
      let res = await getAllPatients()
      console.log(res)
      if (res.data.data.success === 1) {
        console.log(res.data.data.allPatients)
        setPatients(res.data.data.allPatients)
      }
    } catch (err) {
      toast.error(res.data.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }
  useEffect(() => {
    handleGetAllPatients()
  }, [])
  return (
    <React.Fragment>
      <div className="page-content">
        {/* <Container fluid> */}
        <h4>All Patients</h4>
        {patients?.length === 0 && <Spinner className="ms-2" color="primary" />}
        {patients?.length > 0 && <Patientstable data={patients} />}
        {/* </Container> */}
      </div>
    </React.Fragment>
  )
}

export default Allpatients
