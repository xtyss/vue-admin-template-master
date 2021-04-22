import request from "@/utils/request";

export default {
  querySubjectList (){
    return request({
      url:`/serviceedu/eduSubject/getSubjectList`,
      method:'get'
    })
  }
}
