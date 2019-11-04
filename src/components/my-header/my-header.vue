<template>

        <!-- 顶部导航栏:派送至：北京石景山 开始 -->
        <div class="top-daohang">
            <a href="" class="top-daohang-l">
                    <img src="./img/public/address.png" alt="" class="img-icon">
                    <span class="span-icon">地址</span>
            </a>
            <div class="top-daohang-c">
                    <span class="span-icon">北京石景山</span>
                    <img src="./img/public/downarro.png" alt="" class="">
            </div>
            <a href="" class="top-daohang-l">
                    <img src="./img/public/search.png" alt="" class="img-icon">
                    <span class="span-icon">搜索</span>
            </a>
        </div>
        <!-- 顶部导航栏:派送至：北京石景山 结束 -->


</template>

<script>


    export default {
        name: "my-header"
    }
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }


    /* 公共的icon样式 */

    .img-icon {
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        margin: 0 auto;
        opacity: 0.5;
    }

    /* 公共的span样式 */

    .span-icon {
        font-size: 0.24rem;
        color: #A8A3A7;
    }

    /* 首页顶部导航栏 开始 */

    .top-daohang {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 1.3rem;
        padding: 0.24rem 0.24rem;
        background: #fff;
        border-bottom: 0.02rem solid #f1f1f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .top-daohang>.top-daohang-l {
        width: 17%;
        height: 100%;
        text-align: center;
    }

    .top-daohang>.top-daohang-c {
        width: 66%;
        height: 100%;
        text-align: center;
        overflow: hidden;
    }

    .top-daohang>.top-daohang-c img {
        display: inline-block;
        opacity: 0.5;
        width: 0.26rem;
        height: 0.54rem;
        margin-left: 0.2rem;
        padding-top: 0.24rem;
    }

    .top-daohang .top-daohang-c span {
        color: #000;
        display: inline-block;
        font-size: 0.32rem;
    }


    /* 首页顶部导航栏 结束 */


</style>
