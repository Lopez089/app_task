import React from 'react'
import './item.atoms.css'
import { task } from '../../../models/'

export const Item = (props: task): JSX.Element => {
  const { task, state } = props

  const cardColor = state === 'complete' ? 'card' : ''

  return (
    <li className={cardColor}>
      <input type="checkbox" checked={state === 'complete'} />
      {task}
    </li>
  )
}
