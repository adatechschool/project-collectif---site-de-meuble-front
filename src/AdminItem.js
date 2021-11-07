import React from 'react'
import './App.css'
import edit from './images/edit.png'
import trash from './images/supprimer.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import ModalDescription from './Modal_description'
import { useState } from 'react'

const AdminItem = ({ itemAdmin }) =>{ 
  const [show, setShow] = useState(false);
  return (
  <table striped bordered hover>
    <tbody className='infoAdminItem'>
      <tr >
        <td>
          <button onClick={() => setShow(true) } id=''>{itemAdmin.name}</button>
          <ModalDescription onClose={() => setShow(false)} show={show} />
        </td>
        <td>{itemAdmin.username}</td>
        <td>{itemAdmin['address'].city}</td>
        <td>
          <div>
            <button type='button' className='Actionsadminsupprimer'>
              <a href=''>
                <img src={edit} alt='edit' className='admin' />
              </a>
            </button>
            <button type='button' className='Actionsadminmodifier'>
              <a href=''>
                <img src={trash} alt='edit' className='admin' />
              </a>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
)}

export default AdminItem
