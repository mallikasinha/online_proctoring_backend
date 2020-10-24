import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Exams} from '../models';
import {ExamsRepository} from '../repositories';

export class ExamControllerController {
  constructor(
    @repository(ExamsRepository)
    public examsRepository : ExamsRepository,
  ) {}

  @post('/exams', {
    responses: {
      '200': {
        description: 'Exams model instance',
        content: {'application/json': {schema: getModelSchemaRef(Exams)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Exams, {
            title: 'NewExams',
            exclude: ['id'],
          }),
        },
      },
    })
    exams: Omit<Exams, 'id'>,
  ): Promise<Exams> {
    return this.examsRepository.create(exams);
  }

  @get('/exams/count', {
    responses: {
      '200': {
        description: 'Exams model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Exams) where?: Where<Exams>,
  ): Promise<Count> {
    return this.examsRepository.count(where);
  }

  @get('/exams', {
    responses: {
      '200': {
        description: 'Array of Exams model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Exams, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Exams) filter?: Filter<Exams>,
  ): Promise<Exams[]> {
    return this.examsRepository.find(filter);
  }

  @patch('/exams', {
    responses: {
      '200': {
        description: 'Exams PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Exams, {partial: true}),
        },
      },
    })
    exams: Exams,
    @param.where(Exams) where?: Where<Exams>,
  ): Promise<Count> {
    return this.examsRepository.updateAll(exams, where);
  }

  @get('/exams/{id}', {
    responses: {
      '200': {
        description: 'Exams model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Exams, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Exams, {exclude: 'where'}) filter?: FilterExcludingWhere<Exams>
  ): Promise<Exams> {
    return this.examsRepository.findById(id, filter);
  }

  @patch('/exams/{id}', {
    responses: {
      '204': {
        description: 'Exams PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Exams, {partial: true}),
        },
      },
    })
    exams: Exams,
  ): Promise<void> {
    await this.examsRepository.updateById(id, exams);
  }

  @put('/exams/{id}', {
    responses: {
      '204': {
        description: 'Exams PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() exams: Exams,
  ): Promise<void> {
    await this.examsRepository.replaceById(id, exams);
  }

  @del('/exams/{id}', {
    responses: {
      '204': {
        description: 'Exams DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.examsRepository.deleteById(id);
  }
}
