import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Exams extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  subject: string;

  @property({
    type: 'string',
    required: true,
  })
  course: string;

  @property({
    type: 'string',
    required: true,
  })
  semester: string;

  @property({
    type: 'number',
    required: true,
  })
  marks: number;

  @property({
    type: 'date',
    required: true,
  })
  startTime: string;

  @property({
    type: 'date',
    required: true,
  })
  endTime: string;

  @property({
    type: 'date',
    required: true,
  })
  checkInTime: string;

  @property({
    type: 'boolean',
    required: true,
  })
  cancelled: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Exams>) {
    super(data);
  }
}

export interface ExamsRelations {
  // describe navigational properties here
}

export type ExamsWithRelations = Exams & ExamsRelations;
