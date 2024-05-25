<template>
  <div>
    <label class="cursor-pointer w-12 h-12 mb-4 flex justify-center items-center rounded-[12px] bg-gray hover:bg-[#C8CAD0] transition">
      <input :accept="accept" type="file" class="hidden" @change="onFileSelected" :multiple="multiple">
      <img class="" src="/svg/plus-big.svg" alt="">  
    </label>

    <!-- Files list -->
    <div v-for="(file, index) in files" :key="file.type + file.size" 
      class="card m-0 flex flex-column border-1 surface-border align-items-center border-b border-gray last:border-0 pb-2 last:pb-0 gap-3 w-full grow"
      draggable="true"
      @dragstart="dragStart(index)"
      @dragover.prevent
      @drop="drop(index)"
    >
      <div class="shrink-0">
        <!-- Video preview -->
        <video v-if="file.isVideo" 
          autoplay
          loop
          muted
          playsinline
          :alt="file.name" 
          :src="file.path" 
          class="w-12 h-12 object-cover block" 
        />
        <!-- Image preview -->
        <img v-else-if="file.isImage" 
          role="presentation" 
          :alt="file.name" 
          :src="file.path" 
          class="w-12 h-12 object-cover block" 
        />
      </div>
      <div class="w-full grow">
        <span class="font-semibold text-14">{{ file.name }}</span>
        <div class="flex justify-between w-full">
          <div>{{ formatSize(file.size) }}</div>
          <button @click="removeFile(index, file)" outlined rounded severity="danger">
            <img class="w-3" src="/svg/cross.svg" alt="Remove">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<Array>()

const props = withDefaults(defineProps<{
	accept?: string,
  multiple?: boolean,
  files?: Array,
}>(), {
  accept: 'image/*',
  multiple: false,
  files: []
})

const files = ref([])
const deleted = ref([])

const setFiles = () => {
  props.files.map(doc => {
    files.value.push(configureFile(doc))
  })
}

watch(props.files, () => {
  setFiles()
})

onMounted(() => {
  setTimeout(() => {
    setFiles()
  }, 100)
})

const emit = defineEmits<{
  (e: 'change', event: any): any,
  (e: 'delete', event: any): any,
}>()

const draggedIndex = null

const dataURItoBlob = (dataURI) => {
              
  var byteString = atob(dataURI.split(',')[1]);
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  var blob = new Blob([ab], {type: mimeString});
  return blob;
}

const dragStart = (index) => {
  props.draggedIndex = index;
}

const drop = (targetIndex) => {
  // Insert the dragged element before the drop target
  const fileToMove = files.value.splice(props.draggedIndex, 1)[0];
  files.value.splice(targetIndex, 0, fileToMove);
  // Reset the draggedIndex
  draggedIndex = null;      
}

const formatSize = (size) => {
  if (size < 1024) return size + ' bytes';
  let i = Math.floor(Math.log(size) / Math.log(1024));
  return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['kB', 'MB', 'GB'][i-1];
}

const removeFile = (index, file) => {
  if(file.hasOwnProperty('id')) {
    deleted.value.push(file.id)
    emit('delete', deleted)
  }
  files.value.splice(index, 1);
}

const configureFile = (file: any) => {
  const type = (file?.mime_type) ? file.mime_type : file.type
  const isVideo = type.startsWith('video/')
  const isImage = type.startsWith('image/')
  const previewURL = (!file?.path) ? URL.createObjectURL(file) : file.path
  const result = {
    name: (file?.filename) ? file.filename : file.name,
    size: file.size,
    type,
    isVideo,
    isImage,
    path: previewURL,
  }
  if(file.hasOwnProperty('id'))
    result.id = file.id
  
  return result
}

const onFileSelected = (event: any) => {
  const selectedFiles = event.target.files;
  if(Array.isArray(modelValue.value) && modelValue.value.length > 0) {
    modelValue.value.splice(0, modelValue.value.length)
  }
  emit('change', selectedFiles)

  for (let i = 0; i < selectedFiles.length; i++) {
    const file = selectedFiles[i]
  
    files.value.push(configureFile(file))
  }
}
</script>

<style scoped>
/* Add your CSS styling here */

.drag-over {
  outline: 3px dashed #26bd6c;
}

</style>
