import Factory from '@ioc:Adonis/Lucid/Factory'
import Asset from 'App/Models/Asset'

export const AssetFactory = Factory
  .define(Asset, ({ faker }) => {
    return ({
      asset: faker.system.fileName(),
      mime: faker.system.mimeType(),
      path: `${new Date().getTime()}.jpg`,
    })
  })
  .build()

export async function randomAssetId () {
  const req = await Asset.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
