<template>
  <div>
    <el-date-picker
      v-model="value1"
      @change="changeDatePicker"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></el-date-picker>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="160"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" min-width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      tableData: [
        {
          date: "2020年7月24日 22:29:31",
          name: "项行茂",
          address: "深圳市龙岗区",
        },
        {
          date: "2020年7月24日 22:29:31",
          name: "项行茂",
          address: "深圳市龙岗区",
        },
        {
          date: "2020年7月24日 22:29:31",
          name: "项行茂",
          address: "深圳市龙岗区",
        },
      ],
    };
  },
  created() {},
  methods: {
    getInfo() {},
    changeDatePicker(date) {
      console.log(date);
    },
  },
};
</script>

<style>
</style>