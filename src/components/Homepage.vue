<template>
  <div>
    <Navigation></Navigation>
    <ManageLoan></ManageLoan>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import ManageLoan from "@/components/ManageLoan";

export default {
  name: "homepage",
  components: {ManageLoan, Navigation}
}
</script>

<style scoped>

</style>