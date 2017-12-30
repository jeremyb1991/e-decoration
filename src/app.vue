<template>
    <!-- App -->
    <div id="app">

        <!-- Main Views -->


        <f7-views>
            <f7-view id="main-view" :domCache="false"  :dynamic-navbar="false" :main="true">

                <f7-toolbar>
                    <f7-link href="/home/">首页</f7-link>
                    <f7-link href="/worker/">找人</f7-link>
                    <f7-link href="/resources/">找材料</f7-link>
                    <f7-link href="/mine/">我的</f7-link>
                </f7-toolbar>

                <!-- Pages -->
                <f7-pages >
                    <f7-page >

                        <div class="swiper-container swiper-init" data-speed="400" data-space-between="30"  data-pagination=".swiper-pagination">
                            <div class="swiper-pagination"></div>
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><img src="./assets/icon.png" alt=""></div>
                                <div class="swiper-slide"><img src="./assets/designer.jpeg" alt=""></div>
                                <div class="swiper-slide"><img src="./assets/icon.png" alt=""></div>
                            </div>
                        </div>

                        <f7-timeline tablet-sides	 col="50" tablet-col="20">
                            <f7-timeline-item day="21" month="DEC" inner content="Some text goes here"></f7-timeline-item>
                            <f7-timeline-item day="22" month="DEC" inner content="Another text goes here"></f7-timeline-item>
                            <f7-timeline-item day="22" month="DEC" inner content="Another text goes here"></f7-timeline-item>

                        </f7-timeline>

                        <div class="page-content">
                                <div class="swiper-container">
                                    <div class="swiper-pagination"></div>
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide"><span>Slide 1</span></div>
                                        <div class="swiper-slide"><span>Slide 2</span></div>
                                        <div class="swiper-slide"><span>Slide 3</span></div>
                                        <div class="swiper-slide"><span>Slide 4</span></div>
                                        <div class="swiper-slide"><span>Slide 5</span></div>
                                        <div class="swiper-slide"><span>Slide 6</span></div>
                                        <div class="swiper-slide"><span>Slide 7</span></div>
                                    </div>
                                </div>
                        </div>
                        <!--<app-home></app-home>-->


                    </f7-page>
                </f7-pages>

            </f7-view>
        </f7-views>


    </div>
</template>

<script>

</script>
<style>

    .swiper-container {
        height:15em;
    }
    .swiper-slide {
        background: #fff;
    }
    .swiper-slide span {
        text-align:center;
        display:block;
        margin: 20px;
        font-size:21px;
    }
    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background: none;
        border:1px solid #aaa;
        border-radius: 0 0 0 0;
        opacity:1;
        cursor: pointer;
    }
    .swiper-pagination-bullet-active {
        background: #007aff;
        border-color: #007aff;
    }

    .timeline{
        margin: 0em 0.1em;
    }
</style>