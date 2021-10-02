import React from 'react'

const Fcontact = ({c, button}) => {
    return (
        <tbody>
            <tr>
                <td className='av'><img src={c['avatar']} alt='Failed to load' /></td>
                <td className='na'>{c['first_name']} {c['last_name']}</td>
                <td className='pn'>{c['phone_number']}</td>
                <td className='ei'>{c['email']}</td>
                <td className='un'>{c['university']}</td>
                <td className='fa'><button onClick={() => button(c['id'])}>
                    <i className="fas fa-heart"></i>
                </button></td>
            </tr>
        </tbody>
    )
}

export default Fcontact
