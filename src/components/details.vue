<template>
  <div>
    <el-form ref="form" :model="formData" label-width="110px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="店铺编号：">
            <span>{{ formData.number }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="店铺名称：">
            <span>{{ formData.name }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="联系电话：">
            <span>{{ formData.phoneNumber }}</span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="所在地区：">
            <span>{{ formData.address }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="详细地址：">
            <span>{{ formData.addressDetails }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="经纬度：">
            <el-input class="wd80" v-model="formData.longitude" placeholder="经度"></el-input>
            <span class="pd10">-</span>
            <el-input class="wd80" v-model="formData.latitude" placeholder="纬度"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="地图：">
        <vue-map></vue-map>
      </el-form-item>
      <el-form-item label="营业时间：">
        <el-time-select
          class="wd120"
          placeholder="起始时间"
          v-model="formData.startTime"
          :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
        ></el-time-select>
        <span class="pd10">-</span>
        <el-time-select
          class="wd120"
          placeholder="结束时间"
          v-model="formData.endTime"
          :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
        ></el-time-select>
      </el-form-item>
      <el-form-item label="公交线路：">
        <el-input v-model="formData.busLine" placeholder="请输入内容" style="width:50%"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="8">
          <el-form-item label="门头照：">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="营业执照：">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button>返 回</el-button>
        <el-button type="primary" @click="onSubmit">保 存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import VueMap from "./Map";
export default {
  components: { VueMap },
  data() {
    return {
      formData: {
        number: "SH001",
        name: "深圳龙岗店",
        phoneNumber: "18612345678",
        address: "广东省, 深圳市, 龙岗区",
        addressDetails: "广东省深圳市龙岗区坂田街道新围仔",
        longitude: "",
        latitude: "",
        startTime: "",
        endTime: "",
        busLine: "",
      },
      imageUrl: "",
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    onSubmit() {},
  },
};
</script>

<style scoped>
.pd10 {
  padding: 10px;
}
.wd80 {
  width: 80px;
}
.wd120 {
  width: 120px;
}
</style>