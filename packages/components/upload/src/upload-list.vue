<template>
  <transition-group tag="ul" :class="containerKls" :name="nsList.b()">
    <li
      v-for="file in files"
      :key="file.uid || file.name"
      :class="[
        nsUpload.be('list', 'item'),
        nsUpload.is(file.status),
        { focusing },
      ]"
      tabindex="0"
      @keydown.delete="!disabled && handleRemove(file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <slot :file="file">
        <img
          v-if="
            listType === 'picture' ||
            (file.status !== 'uploading' && listType === 'picture-card')
          "
          :class="nsUpload.be('list', 'item-thumbnail')"
          :src="file.url"
          :crossorigin="crossorigin"
          alt=""
        />
        <div
          v-if="file.status === 'uploading' || listType !== 'picture-card'"
          :class="nsUpload.be('list', 'item-info')"
        >
          <a
            :class="nsUpload.be('list', 'item-name')"
            @click.prevent="handlePreview(file)"
          >
            <el-icon :class="nsIcon.m('document')">
              <Document />
            </el-icon>
            <span
              :class="nsUpload.be('list', 'item-file-name')"
              :title="file.name"
            >
              {{ file.name }}
            </span>
          </a>
          <el-progress
            v-if="file.status === 'uploading'"
            :type="listType === 'picture-card' ? 'circle' : 'line'"
            width="40"
            :stroke-width="listType === 'picture-card' ? 4 : 2"
            :percentage="Number(file.percentage)"
            :style="listType === 'picture-card' ? '' : 'margin-top: 0.5rem'"
          />
        </div>

        <label :class="nsUpload.be('list', 'item-status-label')">
          <el-icon
            v-if="listType === 'text'"
            icon="icon-check-circle"
            :class="[nsIcon.m('upload-success'), nsIcon.m('circle-check')]"
          >
          </el-icon>
          <el-icon
            v-else-if="['picture-card', 'picture'].includes(listType)"
            :class="[nsIcon.m('upload-success'), nsIcon.m('check')]"
            icon="icon-check"
          >
          </el-icon>
        </label>
        <el-icon
          v-if="!disabled"
          :class="nsIcon.m('close')"
          @click="handleRemove(file)"
          icon="icon-x-close"
        >
        </el-icon>
        <!-- Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn-->
        <!-- This is a bug which needs to be fixed -->
        <!-- TODO: Fix the incorrect navigation interaction -->
        <!-- <i v-if="!disabled" :class="nsIcon.m('close-tip')">{{
          t('el.upload.deleteTip')
        }}</i> -->
        <span
          v-if="listType === 'picture-card'"
          :class="nsUpload.be('list', 'item-actions')"
        >
          <span
            :class="nsUpload.be('list', 'item-preview')"
            @click="handlePreview(file)"
          >
            <el-icon :class="nsIcon.m('zoom-in')" icon="icon-zoom-in-new"></el-icon>
          </span>
          <span
            v-if="!disabled"
            :class="nsUpload.be('list', 'item-delete')"
            @click="handleRemove(file)"
          >
            <el-icon :class="nsIcon.m('delete')" icon="icon-trash-01-new">
            </el-icon>
          </span>
        </span>
      </slot>
    </li>
    <slot name="append" />
  </transition-group>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import {
  Document,
} from '@element-plus/icons-vue'
import { useLocale, useNamespace } from '@element-plus/hooks'
import ElProgress from '@element-plus/components/progress'
import { useFormDisabled } from '@element-plus/components/form'

import { uploadListEmits, uploadListProps } from './upload-list'
import type { UploadFile } from './upload'

defineOptions({
  name: 'ElUploadList',
})

const props = defineProps(uploadListProps)
const emit = defineEmits(uploadListEmits)

const { t } = useLocale()
const nsUpload = useNamespace('upload')
const nsIcon = useNamespace('icon')
const nsList = useNamespace('list')
const disabled = useFormDisabled()

const focusing = ref(false)

const containerKls = computed(() => [
  nsUpload.b('list'),
  nsUpload.bm('list', props.listType),
  nsUpload.is('disabled', props.disabled),
])

const handleRemove = (file: UploadFile) => {
  emit('remove', file)
}
</script>
