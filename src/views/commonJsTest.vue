<template>
  <div></div>
</template>

<script>
import deepMerge from "@/common/js/deepMerge";
export default {
  data() {
    return {};
  },
  created() {
    this.deepMerge_test();
  },
  methods: {
    deepMerge_test() {
      let obj1 = {
        title: "对象1",
        desc: {
          age: 18,
          height: 180,
        },
      };
      let obj2 = {
        title: "对象2",
        desc: {
          age: 25,
        },
      };
      let res = deepMerge(obj1, obj2);
      console.log(res, "deepMerge测试结果");
    },
  },
};
</script>

<style lang="scss">
</style>
