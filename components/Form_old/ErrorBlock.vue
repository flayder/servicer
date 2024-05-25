<template>
    <div class="w-[100%] fixed top-[0px] left-[0px]" style="z-index: 2000;">
        <div
            class="w-[100%] flex items-center justify-center mb-2 p-[8px] opacity-50"
            v-for="error in getErrors"
            :class="{
                'bg-green': isSuccess(error),
                'bg-red': !isSuccess(error)
            }"
        >
            <div class="text-sm text-white text-center">
                {{ error.message }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const {getErrors} = useGlobalErrors()

    const isSuccess = (error: any) => {
        if(typeof error == "object" && error?.success && error.success)
            return true

        return false
    }
</script>

<style scoped>
    .bg-red {
        background: rgb(255, 24, 95);
    }
</style>