import { AppContext } from '../config'

export default (server: any, ctx: AppContext) => {
  server.xrpc.method(
    'app.bsky.feed.describeFeedGenerator',
    async () => {
      return {
        did: ctx.cfg.publisherDid,
        feeds: [
          {
            uri: `at://${ctx.cfg.publisherDid}/app.bsky.feed.generator/habitatge-cooperatiu`,
            displayName: 'Habitatge Cooperatiu Catalunya',
            description: 'Feed sobre cooperatives d’habitatge i dret a viure bé',
          },
        ],
      }
    }
  )
}
