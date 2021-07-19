import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>Shopi | {title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to Shopi',
  description: 'We sell the best products for cheap',
  keywords: 'electronics, buy electronics, cheap electronics',
}

export default Meta
