<template>
  <div>
    <navigation></navigation>
    <el-button type="primary" @click="ret" size="mini" style="margin: 20px;">← 返回借据</el-button>
    <el-tabs v-model="activeName" @tab-click="handleClick" style="margin: 20px;">
      <el-tab-pane label="已还款账单" name="1">
        <el-col :span="5" v-for="(o) in paidLoan" :key="o" :offset="0" style="margin: 20px">
          <b>第{{o.planNum}}期：</b><br>
          归还本金：{{o.planPrinciple-o.remainPrinciple}}<br>
          归还利息：{{o.planInterest-o.remainInterest}}<br>
          复利：{{o.compoundInterest}}<br>
          罚息：{{o.penaltyInterest}}<br>
          总计：{{o.planAmount}}<br>
          还款日期：{{o.updateTime}}
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="当前还款账单" name="2" align="center">
        <el-card :body-style="{ padding: '0px', margin:'20px'}" style="width: 25%" >
          <b>第{{pendingLoan.planNum}}期：</b><br>
          归还本金：{{pendingLoan.planPrinciple}}<br>
          归还利息：{{pendingLoan.planInterest}}<br>
          复利：{{pendingLoan.compoundInterest}}<br>
          罚息：{{pendingLoan.penaltyInterest}}<br>
          总计：{{pendingLoan.planAmount}}<br>
          还款日期：{{pendingLoan.updateTime}}<br>
          <el-button type="primary" @click="payBill" size="mini" style="margin: 20px;">还款</el-button>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="逾期未还账单" name="3">
        <el-col :span="5" v-for="(o) in overdueLoan" :key="o" :offset="0" style="margin: 20px">
          <b>第{{o.planNum}}期：</b><br>
          归还本金：{{o.planPrinciple-o.remainPrinciple}}<br>
          归还利息：{{o.planInterest-o.remainInterest}}<br>
          复利：{{o.compoundInterest}}<br>
          罚息：{{o.penaltyInterest}}<br>
          总计：{{o.planAmount}}<br>
          还款日期：{{o.updateTime}}
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="未还账单（还款计划）" name="4">
        <el-col :span="5" v-for="(o) in planLoan" :key="o" :offset="0" style="margin: 20px">
          <b>第{{o.planNum}}期：</b><br>
          归还本金：{{o.planPrinciple-o.remainPrinciple}}<br>
          归还利息：{{o.planInterest-o.remainInterest}}<br>
          复利：{{o.compoundInterest}}<br>
          罚息：{{o.penaltyInterest}}<br>
          总计：{{o.planAmount}}<br>
          还款日期：{{o.updateTime}}
        </el-col>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: "LoanDetails",
  components: {Navigation},

  data(){
    return{
      paidLoan:[{//已还账单
          planNum:1,
          planPrinciple:4682.4193,
          remainPrinciple:0,
          planInterest:666.6,
          remainInterest:0,
          compoundInterest:0,
          penaltyInterest:0,
          planAmount:5349.0193,
          updateTime:"2021-05-09"
        }
      ],
      pendingLoan:{//本期账单
        planNum:2,
        planPrinciple:4681.4193,
        planInterest:667.6,
        compoundInterest:0,
        penaltyInterest:0,
        planAmount:5349.0193,
        updateTime:"2021-06-09"
      },
      overdueLoan:[//逾期未还账单
      ],
      planLoan:[{//计划账单
        planNum:3,
        planPrinciple:4782.4193,
        remainPrinciple:0,
        planInterest:566.6,
        remainInterest:0,
        compoundInterest:0,
        penaltyInterest:0,
        planAmount:5349.0193,
        updateTime:"2021-07-09"
      }
      ],
      activeName:"1"
    }
  },

  methods: {
    goTo(path) {
      this.$router.replace(path);
    },
    ret() {
      this.$router.go(-1);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    payBill(){

    }
  },
}
</script>

<style scoped>

</style>