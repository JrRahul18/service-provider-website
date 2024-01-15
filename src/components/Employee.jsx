import React from 'react'
import styles from "../styles/Employee.module.css"

const Employee = (props) => {
  return (
    <div className={styles.employeeCard}>
      <img src={props.data.profileImg} alt="" />
      <h5>{props.data.employeeName}</h5>
      <p>{props.data.position}</p>
    </div>
  )
}

export default Employee