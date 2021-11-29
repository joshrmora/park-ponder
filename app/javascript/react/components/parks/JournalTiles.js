import React from 'react'

const JournalTiles = (props) => {
  const { journal, user } = props
  const formattedRating = `${"★".repeat(journal.rating)}${"☆".repeat(5 - journal.rating)}`

  let text = "user"

  if (user.role == "member") {
    text = "member"
  }

  return (
    <div className="journal-tile cell small-8">
      <div className="journal">
        <h2 className={text}>User: {user}</h2>
        <p>{formattedRating}</p>
      </div>
      <h3 className="journal-description">Journal: {journal.body}</h3>
    </div>
  )
}

export default JournalTiles;