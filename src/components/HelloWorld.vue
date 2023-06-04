<template>
    <div class="container animate__animated animate__bounce">
        <div class="t-center t-bold" style="font-size: 3rem; margin: 5rem 0 3rem 0; cursor: pointer">
            开始编写你的 Vue 项目
        </div>
        <div class="m-0-auto pic"></div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 80vh;
    overflow: hidden;
    .pic {
        width: 50vw;
        height: 50vh;
        background: url(https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/20230604160200.png) no-repeat
            center/cover;
    }
}
</style>
