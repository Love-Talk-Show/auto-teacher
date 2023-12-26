<script setup lang="ts">
import { dataSource, columns } from './data.ts'

</script>

<template>
  <a-card hoverable :bordered="false" >
    <a-table :dataSource="dataSource" :columns="columns" 
    bordered size="small" :pagination="false">
        <template #bodyCell="{ column, record }">
            <template v-if ="record[column.key]==='231'">
            <a-tag color='purple'>{{ record[column.key]  }}</a-tag>
            </template>
            <template v-if ="record[column.key]==='232'">
            <a-tag color='cyan'>{{ record[column.key]  }}</a-tag>
            </template>
        </template>
    </a-table>
    <a-card-meta  title="今日课表" description="2023年12月20日更新版" style="padding-top: 20px;">
      <template #avatar>
      </template>
    </a-card-meta>
  </a-card>
</template>
