# simonespaccarotella.com
This is my personal website, built with Next.js and TailwindCSS.
## Deploy the app on CloudFormation

```
aws cloudformation deploy --template-file ./infrastructure/amplify-role.yaml --stack-name SimoneSpaccarotella-AmplifyRole --capabilities CAPABILITY_NAMED_IAM --tags project=SimoneSpaccarotella.com
```

```
aws cloudformation deploy --template-file ./infrastructure/amplify-app.yaml --stack-name SimoneSpaccarotella-AmplifyApp --capabilities CAPABILITY_IAM --parameter-overrides GitHubOauthToken=$GITHUB_ACCESS_TOKEN --tags project=SimoneSpaccarotella.com
```
