import React, { useState } from "react";

const JournalsForm = (props) => {
  const { formData, setFormData } = props

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const numbers = [0, 1, 2, 3, 4, 5]

  const ratingButtons = (numbers).map(number => {
    return (
      <div key={number}>
        <input
          type="radio"
          name="rating"
          id={number}
          onChange={handleChange}
          value={number}
        />
        <label htmlFor="rating" className="ratings">{number}</label>
      </div>
    )
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewJournal(formData)
  }

  return (
    <div className="cell small-8">
      <form onSubmit={handleSubmit}>
        <label htmlFor="rating" className="ratings">Difficulty</label>

        <div className="journal-button">
          {ratingButtons}
        </div>

        <label htmlFor="body" className="ratings">Journal</label>
        <textarea
          type="text"
          name="body"
          id="body"
          onChange={handleChange}
          value={formData.body}
        />
        <input
          className="button"
          type="submit" />
      </form>
    </div>
  )
}
export default JournalsForm