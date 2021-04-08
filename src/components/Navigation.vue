<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="goTo('/Homepage')">返回主页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">贷款业务</template>
        <el-menu-item index="2-1">贷款账户管理</el-menu-item>
        <el-menu-item index="2-2">贷款日终处理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">公共业务</template>
        <el-menu-item index="3-1">交易流水查询</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">存款业务</template>
        <el-menu-item index="4-1">购买产品</el-menu-item>
        <el-menu-item index="4-2">存款产品</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    goTo(path)
    {
      this.$router.replace(path);
    },
  }
}
</script>

<style scoped>

</style>