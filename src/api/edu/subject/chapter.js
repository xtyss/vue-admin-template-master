import request from '@/utils/request'

export default {
  nestedListByCourseId(courseId) {
    return request({
      url: `/eduService/edu-chapter/nested-list/${courseId}`,
      method: 'get'
    })
  }
}
