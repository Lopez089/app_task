import React from 'react'

interface ISectionItems {
  children: JSX.Element
}

export const SectionItems = ({ children }: ISectionItems): JSX.Element => {
  return (
    <section>
      {children}
    </section>
  )
}
