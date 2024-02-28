<template>
  <div>
    <el-table style="width:50%;align-content: center;left: 25% ;padding: auto;" :data="table_list.slice((currentPage-1)*pagesize,currentPage*pagesize)" :default-sort="{prop: 'date', order: 'descending'}"    >
            <el-table-column label="序号" width="170">
                <template slot-scope="scope" >
                    {{scope.$index+1}}
                </template>
            </el-table-column>
            <el-table-column prop="date" label="工号" width="125">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="125">
              
            </el-table-column>
            <el-table-column prop="address" label="职位" width="125">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="125">
                <template>
                    <el-button type="text" size="small">移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <table :data="table_list.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width:50%;align-content: center;left: 25% ;padding: auto;">
                        <colgroup>
                            <col>
                            <col width="170">
                            <col width="125">
                            <col width="125">
                            <col width="125">
                            <col width="125">
                        </colgroup>
                    <tbody>
                        <tr v-for="item in table_list" :key="item.index">
                            <td>
                                <a href="https://gaokao.chsi.com.cn/sch/schoolInfoMain--schId-1.dhtml" target="_blank">{{item.yxdm}}</a>
                            </td>
                            <td>
                               {{ item.index }}
                            </td>
                            <td>
                                {{ item.date }}
                            </td>
                            <td>
                                {{ item.name }}
                            </td>
                            <td>
                                {{ item.address }}
                            </td>
                            <td>
                                <template>
                    <el-button type="text" size="small">移除
                    </el-button>
                </template>
                            </td>
                        </tr>
                    </tbody>
                    </table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
            :page-sizes="[5, 10, 20, 50]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper"
            :total="table_list.length" style="padding: 2%;">
        </el-pagination>

  </div>
</template>

<script>
export default {
    name:'index_22',
    data(){
        return{
            table_list: [{
                date: '20160503',
                name: '王小虎',
                address: '销售'
            }, {
                date: '20160502',
                name: '王小虎',
                address: '销售'
            }, {
                date: '20160504',
                name: '王小虎',
                address: '销售'
            }, {
                date: '20160501',
                name: '王小虎',
                address: '销售'
            }, {
                date: '20160508',
                name: '王小虎',
                address: '销售'
            }, {
                date: '20160506',
                name: '王小虎',
                address: '销售'
            }, {
                date: '20160507',
                name: '王小虎',
                address: '销售'
            },
            {
                date: '20160507',
                name: '王小虎',
                address: '销售'
            }
            , {
                date: '20160506',
                name: '王小虎',
                address: '销售'
            }, {
                date: '20160507',
                name: '王小虎',
                address: '销售'
            },
            {
                date: '20160507',
                name: '王小虎',
                address: '销售'
            }
            , {
                date: '20160506',
                name: '王小虎',
                address: '销售'
            }, {
                date: '20160507',
                name: '王小虎',
                address: '销售'
            },
            {
                date: '20160507',
                name: '王小6',
                address: '销售'
            },
            
            {
                date: '20160507',
                name: '王小虎',
                address: '销售'
            }
          ],
            currentPage: 1,
            pagesize: 10,

        }
    },
    methods: {
            handleSizeChange: function (size) {
                this.pagesize = size;
            },
            handleCurrentChange: function (currentPage) {
                this.currentPage = currentPage;
            },

        }
}
</script>

<style lang="scss" scoped>

</style>