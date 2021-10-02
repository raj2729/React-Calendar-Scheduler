import React from 'react'
import Fcontact from './Fcontact'

const Fcontacts = props => {
    const fcontacts = props.value
    return (
        <div>
            <h2 className="Header">Favourites</h2>
            <div className="Favs">
                {fcontacts.length ? (
                    <table className='Table'>
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
                        {fcontacts.map(contact => {
                            return <Fcontact c={contact} key={contact.id} button={props.button} />;
                        })}
                  </table>
                ) : (
                    <ul>
                        No Favourites
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Fcontacts
