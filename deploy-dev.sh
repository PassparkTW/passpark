REACT_APP_BUILD_STAGE=beta pnpm build;
aws s3 sync build s3://dev-hapre-web --delete;
aws cloudfront create-invalidation --distribution-id E1GJNW54JDOTFN --paths "/*";
