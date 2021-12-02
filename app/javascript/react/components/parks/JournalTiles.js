import React from 'react'

const JournalTiles = (props) => {
  const { journal, user } = props
  const formattedRating = `${"⛰️".repeat(journal.rating)}`

  let editElement

  if (user === journal.user.username) {
    editElement = <span ><a href={`/journals/${journal.id}/edit`}>Edit</a></span>
  }

  return (
    <div className="journal-tile">
      <div className="journal">
        <h2 className="journal-user">@{journal.user.username}</h2>
        <p className="journal-rating">{formattedRating}</p>
      </div>
      <h3 className="journal-body">{journal.body}</h3>
      {user === journal.user.username && 
        <div className="journal-edit">{editElement}</div>
      }
    </div>
  )
}

export default JournalTiles;