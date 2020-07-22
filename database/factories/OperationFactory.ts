import Factory from '@ioc:Adonis/Lucid/Factory'
import Operation from 'App/Models/Operation'

export const OperationFactory = Factory
  .define(Operation, ({ faker }) => {
    return ({
      operation: faker.name.jobDescriptor(),
    })
  })
  .build()

export async function randomOperationId () {
  const req = await Operation.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
