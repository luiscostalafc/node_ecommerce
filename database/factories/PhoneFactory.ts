import Factory from '@ioc:Adonis/Lucid/Factory'
import Phone from 'App/Models/Phone'

export const PhoneFactory = Factory
  .define(Phone, ({ faker }) => ({
    type: faker.random.arrayElement(['celular', 'fixo', 'comercial', 'contato']),
    area_code: String(faker.random.number(99)),
    phone: faker.phone.phoneNumber(),
    whatsapp: faker.random.boolean(),
    inactive: faker.random.boolean(),
    obs: faker.lorem.words(5),
  }))
  .build()

export const randomPhoneId = async () => {
  const find = await Phone.first()
  return find?.id
}
