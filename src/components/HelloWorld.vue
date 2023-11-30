<template>
    <div class="box animate__animated animate__bounce flex flex-col justify-center">
        <div class="flex justify-center items-center text-5xl my-6">
            <SvgIcon color="red" width="2rem" height="2rem"></SvgIcon>
            开始编写你的 Vue 项目
        </div>
        <div class="pic my-0 mx-auto"></div>
    </div>
</template>

<script setup>
onMounted(() => {})
const a = ref(123)
</script>

<style lang="scss" scoped>
.box {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: var(--main-color);
    .pic {
        width: 50vw;
        height: 50vh;
        background: url(https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/20231130092248.png) no-repeat
            center/cover;
    }
}
</style>
