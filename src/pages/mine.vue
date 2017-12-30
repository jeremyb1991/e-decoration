<template>
    <f7-page>
        <div class="card" @click="login">
            <div class="card-content">
                <div class="card-content-inner"><img src="../assets/login.png" class="img"></div>
            </div>
        </div>
        <div class="card trace" >
            <div class="row">
                <a class="favorite" href="/favorite/收藏"><div class="col-33 favorite"><h4>收藏</h4></div></a>
                <a class="calendar" href="/calendar/"><div class="col-33 calendar"><h4>日历</h4></div></a>
                <a class="history" href="/history/"><div class="col-33 history"><h4>历史</h4></div></a>
            </div>
        </div>

    </f7-page>
</template>

<script>
    export default {
        methods:{
            login(){
                console.log('login');
            }
        }
    }
</script>
<style>
    .card{
        height:155px;
        margin-top:10px;
    }
    .card-content-inner{
        height:224px;
    }
    .img{
        position: absolute;
        padding-left: 4.6em;
        height:50%;
        width:50%;
    }
    .favorite{
        background-image: url("../assets/favorite.png");
        height: 80px;
        background-repeat: no-repeat;
        background-position: 20px 15px;
        background-size: 50px 50px;
    }
    .calendar{
        background-image: url("../assets/calendar.png");
        height: 80px;
        background-repeat: no-repeat;
        background-position: 20px 15px;
        background-size: 50px 50px;
    }
    .history{
        background-image: url("../assets/history.jpeg");
        height: 80px;
        background-repeat: no-repeat;
        background-position: 20px 15px;
        background-size: 50px 50px;
    }
    h4{
        padding: 40px 25px;
        width:max-content;
        color: black;
    }
    .trace{
        height:100px;
    }
</style>