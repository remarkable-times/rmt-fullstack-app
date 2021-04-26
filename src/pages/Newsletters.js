import React from 'react'
import { AmplifySignOut } from '@aws-amplify/ui-react';
import NewsletterGrid from '../components/NewsletterGrid'
import Title from '../components/Title'
import Nav from '../components/Nav'

export default function Newsletters() {
  return (
    <div>
    <Title />
    <Nav />
    <NewsletterGrid />
    <AmplifySignOut />
    </div>

  )
}
