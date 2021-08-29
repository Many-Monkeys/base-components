import React from 'react'

export type CopyrightFields = {
  company?: string
}

export const Copyright: React.FC<CopyrightFields> = ({ company }) => {
  return (<div>&copy; {company ?? 'Many Monkeys'} {new Date().getFullYear()}</div>)
}
