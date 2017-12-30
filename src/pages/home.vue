<template>
    <f7-page name="home">


        <div class="swiper-container" id="company-introduction"   >
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../assets/icon.png" alt=""></div>
                <div class="swiper-slide"><img src="../assets/designer.jpeg" alt=""></div>
                <div class="swiper-slide"><img src="../assets/icon.png" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <!--data-pagination=".swiper-pagination"-->
        <!--class="swiper-container swiper-init"-->

        <f7-timeline>
            <f7-timeline-item day="21" month="DEC" inner content="Some text goes here"></f7-timeline-item>
            <f7-timeline-item day="22" month="DEC" inner content="Another text goes here"></f7-timeline-item>
            <f7-timeline-item day="22" month="DEC" inner content="Another text goes here"></f7-timeline-item>
        </f7-timeline>

        <div class="content-block-title">原创案例</div>
        <div class="swiper-container swiper-1 swiper-init" data-pagination=".swiper-pagination">
            <div class="swiper-pagination"></div>
            <div class="swiper-wrapper">
                <div class="swiper-slide"><span>原创案例 1</span></div>
                <div class="swiper-slide"><span>原创案例 2</span></div>
                <div class="swiper-slide"><span>原创案例 3</span></div>
            </div>
        </div>
    </f7-page>
</template>

<style>
    .swiper-slide {
        background: #fff;
        box-sizing: border-box;
        border: 1px solid #ccc;
    }
    .swiper-slide span {
        text-align:center;
        display:block;
        margin: 20px;
        font-size:21px;
    }
    .swiper-container {
        height: 120px;
        margin: 35px 0;
    }

</style>

<script>

    // Init slider and store its instance in mySwiper variable

    export default {}
</script>