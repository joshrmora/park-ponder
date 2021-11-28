import React from 'react'

const JournalTiles = (props) => {
  const { journal, user } = props
  const formattedRating = `${"★".repeat(journal.rating)}${"☆".repeat(5 - journal.rating)}`

  let text = "user"
  
  if (user.role == "member") {
    text = "member"
  }

  return (
    <div className="review-tile cell small-8">
      <div className="review">
        <h2 className={text}>{user.username}</h2>
        <p className="stars">{formattedRating}</p>
      </div>
      <h3 className="review-description">{journal.body}</h3>
    </div>
  )
}

export default JournalTiles;