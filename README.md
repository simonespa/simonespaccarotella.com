# simonespaccarotella.com
This is my personal website, built with Next.js and TailwindCSS.
## Deploy the app on CloudFormation

```
aws cloudformation deploy --template-file ./infrastructure/role.yaml --stack-name SimoneSpaccarotellaAmplify-Role --capabilities CAPABILITY_NAMED_IAM --tags project=SimoneSpaccarotellaAmplify
```

```
aws cloudformation deploy --template-file ./infrastructure/amplify.yaml --stack-name SimoneSpaccarotellaAmplify-App --capabilities CAPABILITY_IAM --parameter-overrides GitHubOauthToken=$GITHUB_ACCESS_TOKEN --tags project=SimoneSpaccarotellaAmplify
```
