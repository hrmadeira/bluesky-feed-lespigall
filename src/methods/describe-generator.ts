import { AppContext } from '../config'

export default (ctx: AppContext) => {
  return async () => {
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
}
