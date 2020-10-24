import {DefaultCrudRepository} from '@loopback/repository';
import {Exams, ExamsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ExamsRepository extends DefaultCrudRepository<
  Exams,
  typeof Exams.prototype.id,
  ExamsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Exams, dataSource);
  }
}
