import React from 'react'
import { AmplifySignOut } from '@aws-amplify/ui-react';
import NewsletterGrid from '../components/NewsletterGrid'
import Title from '../components/Title'

export default function Newsletters() {
  return (
    <div>
    <Title />
    <NewsletterGrid />
    <AmplifySignOut />
    </div>

  )
}
