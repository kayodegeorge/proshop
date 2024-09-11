import React from 'react'
import { Helmet } from 'react-helmet-async'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to Proshoop',
  description: 'Welcome to our e-commerce store!',
  keywords: 'e-commerce, shopping, online store, buy electronics',
}

export default Meta
