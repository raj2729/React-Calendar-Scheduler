import React from 'react'
import Contact from './Contact'

const Contacts = props => {
  const contacts = props.value
  return (
    <div>
      <h2 className="Header">Contacts</h2>
      <div className="Contacts">
        <table className="Table">
          <tbody>
            <tr>
              <th className='av'>Avatar</th>
              <th className='na'>Name</th>
              <th className='pn'>Phone Number</th>
              <th className='ei'>Email id</th>
              <th className='un'>University</th>
              <th className='fa'>Favourites</th>
            </tr>
          </tbody>
          {contacts.map(contact => {
            return <Contact c={contact} key={contact.id} button={props.button} />;
          })}
        </table>
      </div>
    </div>
  )
}

export default Contacts
