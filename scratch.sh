

apig-test \
  --username='bmccann36@gmail.com' \
  --password='oogabooga' \
  --user-pool-id='us-east-1_dNWPyLF2p' \
  --app-client-id='2m4hgdb9u618gm6kqnmqqrm5rd' \
  --cognito-region='us-east-1' \
  --identity-pool-id='us-east-1:48892552-f436-4bdf-9ad5-588fafb442d3' \
  --invoke-url='https://va5xjnkntf.execute-api.us-east-1.amazonaws.com/bri' \
  --api-gateway-region='us-east-1' \
  --path-template='/api' \
  --method='GET' \
  --params='{}' \
  --additional-params='{}' \
  --access-token-header='cognito-access-token' \
  --body='{}'
