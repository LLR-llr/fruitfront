<template>
    <!-- 底部TAB栏(首页的颜色为橘色，可复制) 开始 -->
    <div class="footer-tab">
        <ul>
            <a href="">
                <li>
                    <img src="./img/public/index.png" alt="" id="img-icon-color">
                    <span class="span-icon" id="span-icon-color">首页</span>
                </li>
            </a>
            <a href="classify.html">
                <li>
                    <img src="./img/public/search.png" alt="" >
                    <span class="span-icon">分类</span>
                </li>
            </a>
            <a href="Car.html">
                <li>
                    <img src="./img/public/cart.png" alt="" >
                    <span class="span-icon">购物车</span>
                </li>
            </a>
            <a href="mine.html">
                <li>
                    <img src="./img/public/mine.png" alt="" >
                    <span class="span-icon">我的</span>
                </li>
            </a>
        </ul>
    </div>
    <!-- 底部TAB栏 结束 -->
</template>

<script>
    export default {
        name: "my-footer"
    }
</script>

<style scoped>
    /* 底部TAB栏 开始 */

    .footer-tab {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 9999;
        width: 100%;
        height: 1rem;
        background: #fff;
        border-top: 0.02rem solid #DCDCDC;
    }

    .footer-tab ul a li {
        width: 25%;
        padding-top: 0.12rem;
        float: left;
        text-align: center;
    }
    .footer-tab ul a li img{
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        margin: 0 auto;
        opacity: 0.5;
    }
    .span-icon {
        font-size: 0.24rem;
        color: #A8A3A7;
    }

    #span-icon-color {
        color: #FF9201;
    }
    #img-icon-color {
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        margin: 0 auto;
        opacity: 1;
    }

    /* 底部TAB栏 结束 */
</style>
