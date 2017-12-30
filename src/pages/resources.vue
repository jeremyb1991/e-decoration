<template>
    <f7-page>
        <div class="navbar">
            <div class="navbar-inner">
                <div class="left">

                </div>
                <div class="center"></div>
                <div class="right">
                    <a href="#" class="link icon-only" @click="openRight">
                        <i class="icon icon-bars"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="page-content" @click="closePanel">
            <div class="content-block-title">地板</div>
            <div class="swiper-container swiper-1 swiper-init" data-slides-per-view="2" data-speed="400" data-space-between="5" >
                <div class="swiper-pagination"></div>
                <div class="swiper-wrapper">
                    <div class="swiper-slide swiper-width"><a href="/resourcesDetail/" ><span>案例 1</span></a></div>
                    <div class="swiper-slide"><span>原创案例 2</span></div>
                    <div class="swiper-slide"><span>原创案例 3</span></div>
                </div>
            </div>

            <div class="content-block-title">地砖</div>
            <div class="swiper-container swiper-2 swiper-init" data-slides-per-view="2" data-speed="400" data-space-between="5" >
                <div class="swiper-pagination"></div>
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><span>原创案例 1</span></div>
                    <div class="swiper-slide"><span>原创案例 2</span></div>
                    <div class="swiper-slide"><span>原创案例 3</span></div>
                </div>
            </div>

            <div class="panel panel-right panel-cover">
                <div class="content-block-title">地板</div>
                <!--<p><a href="#" class="panel-close" @click="closePanel">关闭</a></p>-->
                <div class="content-block">
                    <div class="row">
                        <div class="col-33">25%</div>
                        <div class="col-33">25%</div>
                        <div class="col-33">25%</div>
                    </div>
                    <div class="row">
                        <div class="col-33">25%</div>
                        <div class="col-33">25%</div>
                        <div class="col-33">25%</div>
                    </div>
                    <div class="row no-gutter">
                        <div class="col-80"></div>
                        <div class="col-20">更多</div>
                    </div>
                </div>
                <hr>
                <div class="content-block-title">地砖</div>
                <!--<p><a href="#" class="panel-close" @click="closePanel">关闭</a></p>-->
                <div class="content-block">
                    <div class="row">
                        <div class="col-33">25%</div>
                        <div class="col-33">25%</div>
                        <div class="col-33">25%</div>
                    </div>
                    <div class="row">
                        <div class="col-33">25%</div>
                        <div class="col-33">25%</div>
                        <div class="col-33">25%</div>
                    </div>
                </div>
                <hr>
                <div class="content-block-title">价格区间(元)</div>
                    <div class="row">
                        <div class="col-33 low-price"><input class="price-input" type="text" placeholder="最低价"></div>
                        <div class="col-33 to">-</div>
                        <div class="col-33 high-price"><input class="price-input" type="text" placeholder="最高价"></div>
                    </div>

                <hr>


            </div>
            <div class="page-content">
                <div class="content-block">

                    <!--<p><a href="#" class="open-right-panel" @click="openRight">Open Right Panel</a></p>-->
                </div>
            </div>
        </div>



    </f7-page>
</template>

<script>
    var myApp = new Framework7();

    export default {

        methods:{
            openLeft(){
                myApp.openPanel('left',false);
            },
            openRight(){

                myApp.openPanel('right',true);
            },
            closePanel(){
                myApp.closePanel();
            }
        }
    }
</script>
<style>
    .content-block-title{
        margin:15px 15px 5px;
    }
    .swiper-container{
        height: 12em;
        margin:25px 0px;
    }
    .col-33{
        padding:5px;
    }
    .panel{
        background: white;
    }
    .panel-bottom{
        margin-bottom: auto;
    }
    .swiper-width{
        width:180px;
    }
    .low-price{
        padding: 10px 40px;
    }
    .price-input{
        border: 2px solid grey;
        width:50px;
        margin:0px -15px;
        padding:10px 10px;
    }
    .to{
        padding:1.2em 2.5em;
    }
    .high-price{
        margin:0.3em 0.9em;
    }
</style>