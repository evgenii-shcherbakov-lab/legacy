# express-lambda
Repo with first tasks in Yumasoft inc.

## AWS Lambda express app with fileupload to Amazon S3 Bucket

Features:
- deployed on lambda
- fileupload feature
- decorators

### Enviroment variables:
- `ID` amazon access key id
- `SECRET` amazon secret key
- `BUCKET_NAME` amazon s3 bucket name

### Prepare project:
```shell
git clone git@github.com:IIPEKOLICT/express-lambda.git
cd express-lambda
npm i
```

### Run in development mode:
```shell
npm run dev
```

### Deploy to AWS Lambda:
```shell
npm run deploy
```
