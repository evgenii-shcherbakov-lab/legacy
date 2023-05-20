import React from 'react'

const SessionCard = ({ session }) => {
  return (
    <div className="card">
      <p>E-mail: {session.user.email || 'неизвестен'}</p>
      <p>Дата входа: {session.date}</p>
    </div>
  )
}

export default SessionCard
