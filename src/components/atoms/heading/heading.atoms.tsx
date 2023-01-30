import React from 'react'
import './heading.atoms.css'

interface IHeading {
  children: string
  as: 'h1' | 'h2' | 'h3'
}

export const Heading = ({ children, as }: IHeading): JSX.Element => {
  if (as === 'h1') { return (<h1 > {children}</h1 >) }
  if (as === 'h2') { return (<h2 > {children}</h2 >) }
  if (as === 'h3') { return (<h3 > {children}</h3 >) }
  return (
    <h1>{children}</h1>
  )
}
