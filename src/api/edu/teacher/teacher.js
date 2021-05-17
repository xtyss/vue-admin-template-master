import request from '@/utils/request'

export default {
  queryTeacherList(cur, limit, queryTeacher) {
    return request({
      url: `/eduService/edu_teacher/pageTeacherCondition/${cur}/${limit}`,
      method: 'post',
      data: queryTeacher
    })
  },
  removeDataById(id) {
    return request({
      url: `/eduService/edu_teacher/delete/${id}/`,
      method: 'delete'
    })
  },
  addTeacher(teacher) {
    return request({
      url: '/eduService/edu_teacher/addTeacher',
      method: 'post',
      data: teacher
    })
  },
  queryTeacherByID(id) {
    return request({
      url: `/eduService/edu_teacher/queryTeacherByID/${id}/`,
      method: 'get'
    })
  },
  updateTeacher(teacher) {
    return request({
      url: `/eduService/edu_teacher/updateTeacher`,
      method: 'post',
      data: teacher
    })
  }
}
