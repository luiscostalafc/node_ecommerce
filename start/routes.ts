/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route
  .group(() => {
    Route.resource('addresses','AddressesController').apiOnly()
    Route.resource('assets','AssetsController').apiOnly()
    Route.resource('cards','CardsController').apiOnly()
    Route.resource('deliveries','DeliveriesController').apiOnly()
    Route.resource('groups','GroupsController').apiOnly()
    Route.resource('operations','OperationsController').apiOnly()
    Route.resource('orders','OrdersController').apiOnly()
    Route.resource('order_details','OrderDetailsController').apiOnly()
    Route.resource('order_statuses','OrderStatusesController').apiOnly()
    Route.resource('permissions','PermissionsController').apiOnly()
    Route.resource('phones','PhonesController').apiOnly()
    Route.resource('products','ProductsController').apiOnly()
    Route.resource('product_applications','ProductApplicationsController').apiOnly()
    Route.resource('product_asingment','ProductAsingmentsController').apiOnly()
    Route.resource('product_description','ProductDescriptionsController').apiOnly()
    Route.resource('product_dimension','ProductDimensionsController').apiOnly()
    Route.resource('stock_operations','StockOperationsController').apiOnly()
    Route.resource('subgroups','SubgroupsController').apiOnly()
    Route.resource('synonyms','SynonymsController').apiOnly()
    Route.resource('users','UsersController').apiOnly()
  })
  .prefix('/v1')
  // .middleware('auth')
