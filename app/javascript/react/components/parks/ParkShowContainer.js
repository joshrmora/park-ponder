import React, { useState, useEffect } from 'react'
import helperFetch from '../helpers/HelperFetch'
import ParkShow from './ParkShow'
import JournalsForm from './JournalsForm'
import JournalTiles from './JournalTiles'

const ParkShowContainer = (props) => {
  const [park, setPark] = useState([])
  const [journals, setJournals] = useState([])
  const [user, setUser] = useState([])
  const parkId = props.match.params.id
  const [formData, setFormData] = useState({
    rating: "",
    body: "",
    park_id: parkId
  })

  useEffect(() => {
    helperFetch(`/api/v1/parks/${parkId}`).then(parkData => {
      setPark(parkData)
      setJournals(parkData.journals)
    })
    helperFetch('/api/v1/users').then(userData => {
      setUser(userData.username)
    })
  }, [])

  const addNewJournal = async (formPayload) => {
    try {
      const response = await fetch("/api/v1/journals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify(formPayload)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        throw (new Error(errorMessage))
      }
      const newJournal = await response.json()
      if (newJournal.errors) {
        alert(newJournal.errors)
      } else {
        setJournals([
          ...journals,
          newJournal
        ])
      }
      setFormData({
        rating: "",
        body: "",
        park_id: parkId
      })
    } catch (err) {
      console.log(err)
    }
  }

  const journalTiles = journals.map((journal) => {
    return (
      <JournalTiles
        journal={journal}
        user={user}
      />
    )
  })

  let createJournals
  createJournals = (
    <JournalsForm
      addNewJournal={addNewJournal}
      formData={formData}
      setFormData={setFormData}
    />
  )

  return (
    <div>
      <ParkShow
        park={park}
      />
      <div className="show-container">
        {createJournals}
      </div>
      <div className="show-container">
        {journalTiles}
      </div>
    </div>
  )
}

export default ParkShowContainer