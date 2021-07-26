import { burgerService } from '../services/BurgerService'
import BaseController from '../utils/BaseController'

export class BurgerController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
    .get('', this.getAll)
    .get('/:id', this.getById)
    .post('', this.create)
    .put('/:id', this.edit)
    .delete('/:id', this.delete)
  }

  getAll(req, res, next) {
    try {
      const burgers = burgerService.getAll()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }
  getById(req, res, next) {
    try {
      const burger = burgeerService.getById(req.params.id)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  create(req, res, next) {
    try {
      const burger = burgerService.burgercreate(req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const burger = burgerService.edit(req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  delete(req, res, next) {
    try {
      burgerService.delete(req.params.id)
      res.send('deleted')
    } catch (error) {
      next(error)
    }
  }
}
