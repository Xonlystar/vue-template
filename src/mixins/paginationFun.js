/**
 * 分页封装
 * */
import qs from 'qs'
export default {
  data () {
    return {
      // 默认请求数据
      tableRequestData: {
        page: 1,
        pageSize: 10
      },
      // 请求地址
      tableRequestUrl: '',
      // 返回的table数据
      tableJson: {
      }
    }
  },
  // 此处不可以用created, 只可以mounted或者berforeRouteEnter,执行顺序beforeRouteEnter->next前, created, mounted, next()回调
  mounted () {
    this.stringToJson()
    this.submitForm('ruleForm')
  },
  methods: {
    /**
     * 提交表单
     * @param formName
     */
    submitForm (formName, searchParam) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (searchParam === 1) {
            this.tableRequestData.page = 1
          }
          delete this.tableRequestData.r
          this.$Posting(this.tableRequestUrl, this.tableRequestData).then(res => {
            if (res) {
              this.tableJson = res
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
        this.changeQuery()
      })
    },
    // 更改query参数
    changeQuery () {
      this.jsonToString()
      let sData = qs.stringify(this.tableRequestData)
      this.$router.replace(this.$route.path + '?' + sData)
      this.stringToJson()
    },
    // 变成字符串后需恢复成对象
    jsonToString () {
      this.tableRequestData.page = Number(this.tableRequestData.page)
      this.tableRequestData.pageSize = Number(this.tableRequestData.pageSize)
      this.tableRequestData.r = Math.random()
      // for (let key in this.tableRequestData) {
      //   if (Array.isArray(this.tableRequestData[key])) {
      //     this.tableRequestData[key] = JSON.stringify(this.tableRequestData[key])
      //   }
      // }
      // 此处还有待优化，未想到最佳方案
      if (this.tableRequestData.userList) {
        this.tableRequestData.userList = JSON.stringify(this.tableRequestData.userList)
        console.log(this.tableRequestData.userList)
      }
    },
    // 判断query上面是否有参数，有的话变成对象
    stringToJson () {
      let queryStr = this.$route.fullPath
      if (queryStr.indexOf('?') !== -1) {
        this.tableRequestData = qs.parse(queryStr.split('?')[1])
        // for (let key in this.tableRequestData) {
        //   if (Array.isArray(JSON.parse(this.tableRequestData[key]))) {
        //     this.tableRequestData[key] = JSON.parse(this.tableRequestData[key])
        //   }
        // }
        // 此处还有待优化，未想到最佳方案
        if (this.tableRequestData.userList) {
          this.tableRequestData.userList = JSON.parse(this.tableRequestData.userList)
        }
        console.log(this.tableRequestData)
      }
    },
    // 删除列表某一条时需判断是不是最后一个页面最后一条
    finalInfo () {
      let len = this.tableJson.counts % this.tableRequestData.pageSize
      if (len === 1 && this.tableRequestData.pageSize >= 1) {
        this.tableRequestData.page--
      }
    },
    // 分页器页数改变执行方法
    handleCurrentChange (val) {
      this.tableRequestData.page = val
      this.submitForm('ruleForm')
    }
  }
}
