<template>
    <f7-page name="worker">
        <!--<f7-navbar title="找人" sliding></f7-navbar>-->
            <div class="list-block">
                <ul >
                    <li>
                        <!-- Additional "smart-select" class -->
                        <a href="#" class="item-link smart-select" data-open-in="picker" data-picker-close-text="关闭">
                            <!-- select -->
                            <select name="fruits" class="close-picker">
                                <option value="apple" class="close-picker" selected><a href="#" class="close-picker">Apple</a></option>
                                <option value="pineapple"><a href="#" class="close-picker">Pineapple</a></option>
                            </select>
                            <div class="item-content">

                                <div class="item-inner">
                                    <!-- Select label -->
                                    <div class="item-title">找人</div>
                                    <!-- Selected value, not required -->
                                    <div class="item-after">设计师</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <!--<li class="drop-down"><a href="#" class="a-down">下拉菜单</a>-->
                    <!--<ul class="drop-down-content">-->
                    <!--<li><a href="#" class="a-down">我是1</a></li>-->
                    <!--</ul>-->
                    <!--</li>-->
                </ul>
            </div>
            <hr>
            <div class="list-block media-list infinite-scroll">
                <ul>
                    <li>
                        <a href="/workerDetail/" class="item-link">
                            <div class="item-content">
                                <div class="item-media"><img src="../assets/icon.png" width="80"></div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">8:00 - 8:45(1 period)</div>
                                        <div class="item-after">change</div>
                                    </div>
                                    <div class="item-text">Speaking with the topic is spacex </div>
                                </div>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>



    </f7-page>
</template>

<script>

    export default {}
</script>

<style>
    .nav{
        list-style: none;
        margin:0px;
        padding:0px;

    }
    .nav>li{
        float: left;
    }
    .a-down{
        display: block;
        text-decoration: none;
        width: 28em;
        height: 50px;
        text-align: left;
        line-height: 50px;
        color: white;
        background-color: #2f3e45;
    }
    .nav>li:first-child a{
        /*border-radius: 10px 10px 10px 10px;*/
    }
    .nav>li:last-child a{
        /*border-radius: 10px 10px 10px 10px;*/
    }
    .drop-down{
        position: relative;
    }
    .drop-down-content{
        padding: 0;
        display: none;
        position: absolute;
    }

    h3{
        font-size: 30px;
        clear: both;
    }
    .drop-down-content li:hover .a-down{
        background-color:red;
    }
    .nav .drop-down:hover .drop-down-content{
        display: block;
    }
    .list-block{
        margin:0px 0px;
    }

</style>