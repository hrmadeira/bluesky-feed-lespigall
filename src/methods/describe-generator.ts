export default (server: any) => {
  const publisherDid = 'did:web:bluesky-feed-lespigall.onrender.com'

  server.xrpc.method(
    'app.bsky.feed.describeFeedGenerator',
    async () => {
      return {
        did: publisherDid,
        feeds: [
          {
            uri: `at://${publisherDid}/app.bsky.feed.generator/habitatge-cooperatiu`,
            displayName: 'Habitatge Cooperatiu Catalunya',
            description: 'Feed sobre cooperatives d’habitatge i dret a viure bé',
          },
        ],
      }
    }
  )
}
