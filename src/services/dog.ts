import DefaultRepository from '../repository/default'
import DogModel from '../models/dog'

const repo = DefaultRepository.get()

class DogService {
  static getAll() {
    return repo.objects('Dog')
  }

  static create(dog: DogModel) {
    repo.write(() => {
      repo.create('Dog', dog)
    })
  }

  static deleteAll() {
    return repo.write(() => {
      repo.delete(DogService.getAll())
    })
  }
}

export default DogService
