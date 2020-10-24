import {Entity, model, property} from '@loopback/repository';

@model()
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
  })
  course?: string;

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
    type: 'string',
    required: true,
  })
  duration: string;

  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  examTime: string;

  @property({
    type: 'string',
    required: true,
  })
  checkInTime: string;


  constructor(data?: Partial<Exams>) {
    super(data);
  }
}

export interface ExamsRelations {
  // describe navigational properties here
}

export type ExamsWithRelations = Exams & ExamsRelations;
