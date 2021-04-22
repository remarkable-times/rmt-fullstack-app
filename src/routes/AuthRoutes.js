import React from 'react'
import Amplify from 'aws-amplify'
import awsExports from '../aws-exports'
import Newsletters from '../pages/Newsletters'
import {Switch, Route} from 'react-router-dom'
import {withAuthenticator} from '@aws-amplify/ui-react'

Amplify.configure(awsExports);

 function AuthRoutes() {
  return (
    <div>
      <Switch>
        <Route component={Newsletters}  />
      </Switch>
    </div>
  )
}

export default withAuthenticator(AuthRoutes);

