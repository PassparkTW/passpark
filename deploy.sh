REACT_APP_BUILD_STAGE=prod pnpm build;
aws s3 sync build s3://prod-hapre-web --delete;
aws cloudfront create-invalidation --distribution-id E22U4QIRICYPNJ --paths "/*";
