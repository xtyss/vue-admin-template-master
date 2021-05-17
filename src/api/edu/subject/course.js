import request from '@/utils/request'

export default {
  addCourse(courseInfo) {
    return request({
      url: `/eduService/edu-course/addCourse`,
      method: 'post',
      data: courseInfo
    })
  },
  findAllTeacher() {
    return request({
      url: `/eduService/edu_teacher/findAll`,
      method: 'get'
    })
  }
}
