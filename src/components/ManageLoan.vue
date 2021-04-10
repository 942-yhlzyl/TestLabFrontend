<template>
  <div>
    <el-form ref="select" :model="form" label-width="80px" style="align-content: center; margin: 20px 50px 20px 50px">
      <el-col :span="7">
        <el-form-item label="借据号">
          <el-input v-model="form.iouNum" placeholder="请搜索借据号"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="7">
        <el-form-item label="客户号">
          <el-input v-model="form.customerCode" placeholder="请搜索客户号"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="5">
        <el-form-item label="贷款状态">
          <el-select v-model="form.loanStatus" placeholder="请选择贷款状态">
            <el-option label="未发放" value="unissued"></el-option>
            <el-option label="正常" value="normal"></el-option>
            <el-option label="损失" value="lost"></el-option>
            <el-option label="异常" value="abnormal"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">筛选</el-button>
        </el-form-item>
      </el-col>
    </el-form>

    <el-table
        :data="tableData"
        stripe
        style="width: 100%"
    >
      <el-table-column
          prop="iouNum"
          label="借据号"
          align="center">
      </el-table-column>
      <el-table-column
          prop="customerCode"
          label="客户号"
          align="center">
      </el-table-column>
      <el-table-column
          prop="customerName"
          label="客户名"
          align="center">
      </el-table-column>
      <el-table-column
          prop="loanStatus"
          label="贷款状态"
          align="center">
      </el-table-column>
      <el-table-column
          prop="productName"
          label="贷款产品"
          align="center">
      </el-table-column>
      <el-table-column
          prop="productCode"
          label="贷款产品编号"
          align="center">
      </el-table-column>
      <el-table-column
          prop="overdueBalance"
          label="逾期金额（元）"
          align="center">
      </el-table-column>
      <el-table-column
          prop="loanTime"
          label="发放日期"
          align="center">
      </el-table-column>
      <el-table-column
          label="操作"
          align="center">
        <el-button type="primary" @click="checkBills()" size="mini">查看账单</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>


export default {
  name: "ManageLoan",
  // eslint-disable-next-line vue/no-unused-components
  data(){
    return{
      form: {
        customerCode: '',
        loanStatus: '',
        iouNum: ''
      },
      tableData: [{
        iouNum: "L2104101241451",
        customerCode: "aa1111202103283",
        customerName: "wtt",
        loanStatus: "正常",
        productName: "个体工商户小额贷款",
        productCode: 40001,
        overdueBalance: 0.0,
        loanTime: "2021-4-10",
        options: [true, true, true]
      }]
    }
  },
  methods:{
    onSubmit() {
      console.log('submit!');
      //todo 筛选
    },
    goTo(path) {
      this.$router.replace(path);
    },
    checkBills(){//查看账单
      this.goTo("/loanDetails");
    },
  }
}
</script>

<style scoped>

</style>