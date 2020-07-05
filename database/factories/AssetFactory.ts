import Factory from '@ioc:Adonis/Lucid/Factory'
import Asset from 'App/Models/Asset'

export const AssetFactory = Factory
  .define(Asset, ({ faker }) => {
    return ({
      asset: faker.system.fileName(),
      mime: faker.system.mimeType(),
      path: faker.system.filePath(),
    })
  })
  .build()

export const randomAssetId = async () => {
  const find = await Asset.first()
  return find?.id
}
