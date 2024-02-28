<template>
    <div class="about">
      <el-input
        placeholder="请输入内容"
        v-model="inputVal"
        @keyup.enter.native="Search_table()"
        clearable
      >
      </el-input>
      <el-table :data="tableData">
        <el-table-column prop="city" label="城市" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="age" label="年龄"> </el-table-column>
        <el-table-column prop="a" label="a" width="180"> </el-table-column>
        <el-table-column prop="b" label="b" width="180"> </el-table-column>
        <el-table-column prop="c" label="c" width="180"> </el-table-column>
        <el-table-column prop="d" label="d" width="180"> </el-table-column>
        <el-table-column prop="e" label="e" width="180"> </el-table-column>
        <el-table-column prop="f" label="f" width="180"> </el-table-column>
      </el-table>
    </div>
  </template>
  <script>
  import { tableData } from "./tablelist";
  export default {
    name:"table_page",
    data() {
      return {
        inputVal: "",
        showTable: [],
        tableData: [],
      };
    },
    methods: {
      Search_table() {
        const Search_List = [];
        let res1 = this.inputVal;
        const res = res1.replace(/\s/gi, "");
        let searchArr = this.showTable;
        searchArr.forEach((e) => {
          let city = e.city;
          let name = e.name;
          let age = e.age;
          if (city.includes(res)) {
            if (Search_List.indexOf(e) == "-1") {
              Search_List.push(e);
            }
          }
          if (name.includes(res)) {
            if (Search_List.indexOf(e) == "-1") {
              Search_List.push(e);
            }
          }
          if (age.includes(res)) {
            if (Search_List.indexOf(e) == "-1") {
              Search_List.push(e);
            }
          }
        });
        this.tableData = Search_List;
      },
    },
    watch: {
      inputVal(item1) {
        if (item1 == "") {
          this.tableData = this.showTable;
        }
      },
    },
    mounted() {
      this.showTable = tableData;
      this.tableData = tableData;
    },
  };
  </script>
  <style lang="scss" scoped>
  .about {
    width: 100%;
    height: 100%;
    .el-input {
      width: 1000px;
    }
    .el-table {
      width: 100%;
      margin: 0 auto;
    }
  }
  </style>