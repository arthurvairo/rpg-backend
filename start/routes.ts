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
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/moments', 'MomentsController.list')
  Route.get('/moments/:id', 'MomentsController.show')
  Route.post('/moments', 'MomentsController.create')
  Route.put('/moments/:id', 'MomentsController.update')
  Route.delete('/moments/:id', 'MomentsController.delete')

  Route.get('/character_infos', 'CharacterInfosController.list')
  Route.get('/character_infos/:id', 'CharacterInfosController.show')
  Route.post('/character_infos', 'CharacterInfosController.create')
  Route.put('/character_infos', 'CharacterInfosController.update')
  Route.delete('/character_infos/:id', 'CharacterInfosController.delete')

  Route.get('/items', 'ItemsController.list')
  Route.get('/items/:id', 'ItemsController.show')
  Route.post('/items', 'ItemsController.create')
  Route.put('/items', 'ItemsController.update')
  Route.delete('/items/:id', 'ItemsController.delete')
}).prefix('/api')
