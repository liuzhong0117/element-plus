<template>
  <el-table v-loading="loading" element-loading-text="Loading..." :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M37.8571 20C37.8571 22.345 37.3952 24.6671 36.4978 26.8336C35.6004 29.0001 34.2851 30.9687 32.6269 32.6269C30.9687 34.2851 29.0001 35.6004 26.8336 36.4978C24.6671 37.3952 22.345 37.8571 20 37.8571C17.6549 37.8571 15.3329 37.3952 13.1663 36.4978C10.9998 35.6004 9.03124 34.2851 7.37306 32.6269C5.71487 30.9687 4.39952 29.0001 3.50211 26.8336C2.60471 24.6671 2.14282 22.345 2.14282 20C2.14282 17.6549 2.60471 15.3329 3.50212 13.1663C4.39953 10.9998 5.71487 9.03124 7.37306 7.37305C9.03125 5.71486 10.9998 4.39952 13.1663 3.50211C15.3329 2.60471 17.6549 2.14282 20 2.14282C22.345 2.14282 24.6671 2.60471 26.8336 3.50212C29.0001 4.39953 30.9687 5.71488 32.6269 7.37307C34.2851 9.03126 35.6004 10.9998 36.4978 13.1663C37.3952 15.3329 37.8571 17.6549 37.8571 20L37.8571 20Z" stroke="#F2F4F7" stroke-width="4.28571" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 2.14282C22.345 2.14282 24.6671 2.60471 26.8336 3.50212C29.0001 4.39952 30.9687 5.71487 32.6269 7.37306C34.2851 9.03125 35.6004 10.9998 36.4978 13.1663C37.3952 15.3329 37.8571 17.6549 37.8571 20" stroke="#2970FF" stroke-width="4.28571" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)

const tableData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]
</script>

<style>
body {
  margin: 0;
}
.example-showcase .el-loading-mask {
  z-index: 9;
}
</style>
