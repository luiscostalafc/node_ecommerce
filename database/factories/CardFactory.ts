import Factory from '@ioc:Adonis/Lucid/Factory'
import Card from 'App/Models/Card'

export const CardFactory = Factory
  .define(Card, ({ faker }) => ({
    card_faker: faker.finance.mask(10),
    brand: faker.random.arrayElement(['visa', 'mastercard']),
    cvv: String(faker.random.number(999)),
    expiration_month: faker.random.number(12),
    expiration_year: faker.random.number(35),
    card_token: faker.random.uuid(),
    holder_name: faker.name.findName(),
    holder_cpf: faker.random.arrayElement(['123.456.789-12', '987.654.321-98']),
    holder_birth_date: faker.date.past(18),
  }))
  .build()

export const randomCardId = async () => {
  const find = await Card.first()
  return find?.id
}
