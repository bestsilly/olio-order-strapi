module.exports = () => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      landingPage: true, // enable Sandbox everywhere
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true
      },
    },
  },
});
