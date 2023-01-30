import React from 'react'
import './item.atoms.css'
import { task } from '../../../models/'

interface IItem {
  item: task
}

export const Item = ({ item }: IItem): JSX.Element => {
  const { task, state } = item

  const cardComplete = state === 'complete' ? 'cardComplete' : ''

  return (
    <li className={`card ${cardComplete}`}>
      <input type="checkbox" checked={state === 'complete'} />
      {task}
    </li>
  )
}
