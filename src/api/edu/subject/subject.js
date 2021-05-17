import request from '@/utils/request'

export default {
  querySubjectList() {
    return request({
      url: `/eduService/eduSubject/getSubjectList`,
      method: 'get'
    })
  }
}
