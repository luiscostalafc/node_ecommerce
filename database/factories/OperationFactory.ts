import Factory from '@ioc:Adonis/Lucid/Factory'
import Operation from 'App/Models/Operation'

export const OperationFactory = Factory
  .define(Operation, ({ faker }) => {
    return ({
      operation: faker.name.jobDescriptor(),
    })
  })
  .build()

export const randomOperationId = async () => {
  const find = await Operation.first()
  return find?.id
}
