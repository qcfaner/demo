<template>
  <div>
    <!-- 表单 -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px">
      <el-form-item label="指定业务员" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请选择指定业务员" style="width: 280px;" disabled>
          <template slot="append">
            <el-button @click="openSalesmanDialog(true)">请选择</el-button>
            <el-button icon="el-icon-close"></el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="目标销售金额" prop="money">
        <el-input-number
          v-model="ruleForm.money"
          controls-position="right"
          :min="1"
          :max="10"
          style="width: 120px;"
        ></el-input-number>
        <span style="padding-left: 10px;">元</span>
      </el-form-item>
      <el-form-item label="指定月份" prop="month">
        <el-date-picker v-model="ruleForm.month" type="month" placeholder="请选择月份"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
      </el-form-item>
    </el-form>

    <!-- 弹窗 -->
    <el-dialog title="请选择业务员" :visible.sync="chooseOp.visible" width="55%">
      <div>
        <!-- 搜索区域 -->
        <div class="search-content">
          <el-form :inline="true" :model="formData" class="demo-form-inline">
            <el-form-item label="姓名">
              <el-input v-model="formData.user" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="formData.phoneNubmer" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button-group>
                <el-button type="primary" icon="el-icon-search" @click="getSalesmanList"></el-button>
                <el-button icon="el-icon-refresh"></el-button>
              </el-button-group>
            </el-form-item>
          </el-form>
        </div>
        <!-- 表格区域 -->
        <!-- v-loading：加载数据时，转圈圈效果 -->
        <el-table
          v-loading="isLoading"
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="业务员姓名" min-width="220" show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column prop="phoneNumber" label="手机号" min-width="220"></el-table-column>
          <el-table-column prop="date" label="添加日期" width="160"></el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="salesman-paging">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[10, 20, 30, 40, 50, 100]"
            :page-size="10"
            layout="total, sizes, prev, pager, next"
            :total="23"
          ></el-pagination>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="openSalesmanDialog(false)">取 消</el-button>
        <el-button type="primary" @click="onChoose">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 页面表单
      ruleForm: {
        name: "",
      },

      // 表单校验规则。可支持自定义校验规则
      rules: {
        name: [
          { required: true, message: "请选择业务人员", trigger: "change" },
        ],
        money: [
          {
            required: true,
            message: "请输入目标销售金额",
            trigger: "blur",
          },
        ],
        month: [{ required: true, message: "请选择月份", trigger: "change" }],
      },

      // 选择业务员弹窗 options
      chooseOp: {
        visible: false,
      },
      // 弹窗表单数据
      formData: {
        user: "",
        phoneNubmer: "",
      },

      isLoading: false, // 加载数据，是转圈圈特效
      tableData: [],
      chooseData: [], // 选择的记录
    };
  },

  methods: {
    // 提交进行表单校验
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    // 点击取消按钮，重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // 控制选择业务员弹窗
    openSalesmanDialog(isOpen) {
      this.$set(this.chooseOp, "visible", isOpen);
    },
    handleClose() {},

    getSalesmanList() {
      this.isLoading = true;
      setTimeout(() => {
        this.tableData = [
          {
            name: "张蕾",
            phoneNumber: 18173608888,
            date: "2020年7月26日 21:20:23",
          },
          {
            name: "张三",
            phoneNumber: 18173606666,
            date: "2020年7月27日 21:20:23",
          },
        ];
        this.isLoading = false;
      }, 1000);
    },
    handleSelectionChange(arr) {
      this.chooseData = arr;
    },

    onChoose() {
      let choosed = this.chooseData.length;
      if (choosed <= 0) {
        alert(`请选择业务员！`);
      } else {
        alert(`您当前选择 ${choosed} 了个业务员！`);
        this.openSalesmanDialog(false);
      }
    },

    // 改变当前页事件
    handleCurrentChange() {
      this.getSalesmanList();
    },
    // 改变分页大小事件
    handleSizeChange() {
      this.getSalesmanList();
    },
  },

  created() {
    this.getSalesmanList();
  },
};
</script>

<style scoped>
.search-content {
  text-align: right;
}
.salesman-paging {
  text-align: right;
  margin-top: 15px;
}
</style>