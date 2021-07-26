import { FakeBurgerDb } from '../db/FakeBurgerDb'
import { BadRequest } from '../utils/Errors'

class BurgerService {
  getAll() {
    return FakeBurgerDb.burgers
  }

  getById(id) {
    const burger = FakeBurgerDb.burgers.find(b => b.id.toString() === id)
    if (!burger) {
      throw new BadRequest('Invalid burger ID')
    }
    return burger
  }

  create(body) {
    FakeBurgerDb.burger.push(body)
    return body
  }

  edit(body) {
    let old = this.getById(body.id)
    old = { ...old, ...body }
    this.delete(old.id)
    FakeBurgerDb.burger.push(old)
    return old
  }

  delete(id) {
    const index = FakeBurgerDb.burgers.findIndex(b => b.id.toString() === id)
    if (index > -1) {
      throw new BadRequest('Invalid Id')
    }
    FakeBurgerDb.burgers.splice(index, 1)
  }
}

export const burgerService = new BurgerService()
