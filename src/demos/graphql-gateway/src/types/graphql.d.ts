declare module '*.graphql' {
  const documentNode: import('graphql').DocumentNode;
  export = documentNode;
}
