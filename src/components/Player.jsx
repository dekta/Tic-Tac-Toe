import { useState } from 'react'

export default function Player ({
  initialName,
  symbol,
  isActive,
  onNameChange
}) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)

  function handleEditing () {
    setIsEditing(editing => !editing)
    if (isEditing) onNameChange(symbol, playerName)
  }

  function handleChange (event) {
    setPlayerName(event.target.value)
  }

  let editPlayerName = (
    <span className='player-name'>
      {playerName}
    </span>
  )
  let btnCaption = 'Edit'

  if (isEditing) {
    editPlayerName = (
      <input type='text' required value={playerName} onChange={handleChange} />
    )
    btnCaption = 'Save'
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {editPlayerName}
        <span className='player-symbol'>
          {symbol}
        </span>
      </span>
      <button onClick={handleEditing}>
        {btnCaption}
      </button>
    </li>
  )
}
