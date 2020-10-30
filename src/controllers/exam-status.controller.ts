// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  Request
} from '@loopback/rest';


export class ExamStatusController {
  constructor() {}
  @post('/markExamStatus', {
    responses: {
      '200': {
        description: 'Exam Status Response',
        content: {
            'application/json': {
        schema: {
          type: 'object',
          title: 'ExamEndResponse',
            properties: {
              status: {type: 'string'},
        },
      },
    },
  },
      },
    },
  })
  async endExam(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            title: 'ExamEndResponse',
              properties: {
                examId:{type: 'integer'},
                proctorId:{type: 'integer'},
                cancelledTime:{type:'string'},
                cancel: {type: 'boolean'},
                studentIds: {type: 'array'},
                reason:{type:'string'},

          },
        },
        },
      },
    })
     request: Request,
  
  ): Promise<object> {
     let statusMsg = "failed";
     let requestParam = JSON.parse(JSON.stringify(request))
     const cancelForStudent = requestParam.cancelForStudent
     if(cancelForStudent.length < 1){

      statusMsg= "exam has been cancelled for all"
    }
    else {
      statusMsg= "exam has been cancelled for " + cancelForStudent.join();
    }
    return {
        "status": statusMsg

    };
  
}
}
