# CI/CD Project Sample

This is a sample project to demonstrate CICD with automated testing using AWS.

This template stack will create components below.

- Code Build
- Code Pipeline for Development
- Code Pipeline for Production

## Create Stack with Cloud Formation

If you update the stack after creation, call update-stack instead of create-stack.

```
aws cloudformation create-stack.
 \
    --stack-name auto-deploy-pipeline \
    --template-body file://Infrastructure/template_pipeline.yml \
    --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM \
    --parameters \
    ParameterKey=OAuthToken,ParameterValue=GitHubPersonalAccessToken \
    ParameterKey=Owner,ParameterValue=GitHubRepoOwnerName \
    ParameterKey=Repo,ParameterValue=GitHubRepoName \
    ParameterKey=ModuleName,ParameterValue=deploy-test-module \
    ParameterKey=DevModuleStackName,ParameterValue=dev-test-module \
    ParameterKey=ProdModuleStackName,ParameterValue=prod-test-module
```

## Additional Configuration

- Setup LifeCycle for S3 Objects to have expiration.
