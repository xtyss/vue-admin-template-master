import request from '@/utils/request'

export default {
  queryTeacherList (cur,limit,queryTeacher){
    return request({
      url:`/eduService/edu_teacher/pageTeacherCondition/${cur}/${limit}`,
      method:'post',
      data:queryTeacher
    })
  },
  removeDataById(id){
    return request({
      url:`/eduService/edu_teacher/${id}/`,
      method:"delete"
    })
  }
}
