// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {
  post,







  Request, requestBody
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
              examId: {type: 'integer'},
              proctorId: {type: 'integer'},
              cancelledTime: {type: 'string'},
              cancel: {type: 'boolean'},
              studentIds: {type: 'array'},
              reason: {type: 'string'},

            },
          },
        },
      },
    })
    request: Request,

  ): Promise<object> {
    let statusMsg = "failed";
    let requestParam = JSON.parse(JSON.stringify(request))
    const cancelForStudent = requestParam.studentIds
    console.log("student id" + cancelForStudent)
    if (cancelForStudent.length == 5) {

      statusMsg = "exam has been cancelled for all"
    }
    else if (cancelForStudent.length < 5) {
      statusMsg = "exam has been cancelled for student id" + cancelForStudent.join();
    }

    else {
      statusMsg = "invalid number of students"

    }
    return {
      "status": statusMsg

    };

  }
}
