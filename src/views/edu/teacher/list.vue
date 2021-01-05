<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="讲师名称">
        <el-input v-model="queryTeacher.name" placeholder="讲师名称"></el-input>
      </el-form-item>
      <el-form-item label="讲师头衔">
        <el-select v-model="queryTeacher.level" clearable placeholder="讲师头衔">
          <el-option :value="1" label="高级讲师"/>
          <el-option :value="2" label="首席讲师"/>
        </el-select>
      </el-form-item>

      <el-form-item label="添加时间">
        <el-date-picker
          v-model="queryTeacher.begin"
          type="datetime"
          placeholder="选择开始时间"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
        />
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="queryTeacher.end"
          type="datetime"
          placeholder="选择截止时间"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="default" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  <!-- 表格 -->
  <el-table
    :data="list"
    element-loading-text="数据加载中"
    border
    fit
    highlight-current-row>
    <el-table-column
      label="序号"
      width="70"
      align="center">
      <template slot-scope="scope">
        {{ (cur - 1) * limit + scope.$index + 1 }}
      </template>
    </el-table-column>
    <el-table-column prop="name" label="名称" width="80" />
    <el-table-column label="头衔" width="80">
      <template slot-scope="scope">
        {{ scope.row.level===1?'高级讲师':'首席讲师' }}
      </template>
    </el-table-column>
    <el-table-column prop="intro" label="资历" />
    <el-table-column prop="gmtCreate" label="添加时间" width="160"/>
    <el-table-column label="操作" width="200" align="center">
      <template slot-scope="scope">
        <router-link :to="'/edu/teacher/edit/'+scope.row.id">
          <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
        </router-link>
        <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <!-- 分页 -->
    <el-pagination
      :current-page="cur"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="queryTeacherList"
    />
  </div>
</template>

<script>
import teacher from "@/api/edu/teacher/teacher";
export default {
  name: "list",
  data(){
    return{
      list:[],
      cur:1,
      limit:10,
      total:0,
      queryTeacher:{}
    }
  },
  created() {
    this.queryTeacherList()
  },
  methods:{
    queryTeacherList(cur=1){
      this.cur = cur
      teacher.queryTeacherList(this.cur,this.limit,this.queryTeacher).then(res=>{
        this.list = res.data.rows
        this.total=res.data.total
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
    onSubmit(){
      this.queryTeacherList()
    },
    reset(){
      this.queryTeacher={}
      this.queryTeacherList()
    },
    removeDataById(id){

      this.$confirm('此操作将永久删除讲师记录,是否继续?','提示',{
        confirmButtonText:"确认",
        cancelButtonText:"取消",
        type:'warning'
      }).then(()=>{
        teacher.removeDataById(id).then(res=>{
          //提示信息
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.queryTeacherList()
        })
      })
      console.log(id)
    }
  }
}
</script>

<style scoped>

</style>
