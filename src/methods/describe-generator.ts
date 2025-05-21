import { AppBskyFeedDescribeFeedGenerator } from '@atproto/api'
import { AppContext } from '../config'

export default (cfg: AppContext): AppBskyFeedDescribeFeedGenerator.Handler => {
  return async () => {
    return {
      did: 'did:web:bluesky-feed-lespigall.onrender.com',
      feeds: [
        {
          uri: 'at://did:web:bluesky-feed-lespigall.onrender.com/app.bsky.feed.generator/habitatge-cooperatiu',
          displayName: 'Habitatge Cooperatiu Catalunya',
          description: 'Feed sobre cooperatives d’habitatge i dret a viure bé',
        },
      ],
    }
  }
}
