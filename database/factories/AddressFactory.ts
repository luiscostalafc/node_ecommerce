import Factory from '@ioc:Adonis/Lucid/Factory'
import Address from 'App/Models/Address'

export const AddressFactory = Factory
  .define(Address, ({ faker }) => ({
    cep: faker.address.zipCode(),
    zone: faker.address.cityPrefix(),
    state: faker.address.state(),
    city: faker.address.city(),
    country: faker.address.zipCode(),
    district: faker.address.citySuffix(),
    street: faker.address.streetName(),
    number: String(faker.random.number(1000)),
    complement: faker.random.arrayElement(['casa','apartarmento','']),
    delivery: faker.random.boolean(),
    inactive: faker.random.boolean(),
  }))
  .build()

export const randomAddressId = async () => {
  const find = await Address.first()
  return find?.id
}
