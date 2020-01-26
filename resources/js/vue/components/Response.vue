<template>
    <div class="wrapper text-center" style="margin-top: 40px;">
        <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
                YOU<br />
                <img :src="require('@/images/' + res.your_choice + '.png')" height="80">
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-left">
                COMPUTER<br />
                <img :src="require('@/images/' + res.computer_choice + '-r.png')" height="80">              
            </div>
        </div>
        <div>Result : {{res.result}}</div>   
        <div>Time : {{res.time}}</div>              
    </div>
</template>

<script>
    export default {
        props: ['res']
    }
</script>