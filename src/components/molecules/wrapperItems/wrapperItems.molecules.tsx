import React from 'react'
import { task } from '../../../models'
import { Item } from '../../atoms/item/item.atoms'
import './wrapperItems.molules.css'

interface IWrapperItem {
  items: task[]
}

export const WrapperItems = ({ items }: IWrapperItem): JSX.Element => {
  return (
    <ul>
      {
        items.map((item: task) => {
          return <Item key={item.id} item={item} />
        })
      }
    </ul>
  )
}
