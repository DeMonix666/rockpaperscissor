<template>
    <div class="wrapper">
        <h1>Vue Js</h1>
        <div class="row">
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                <button v-on:click="fire('rock')"><img src="@/images/rock.png"></button>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                <button v-on:click="fire('paper')"><img src="@/images/paper.png"></button>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                <button v-on:click="fire('scissor')"><img src="@/images/scissor.png" class="image-responsive"></button>
            </div>
        </div>

        <response :res="res" v-if="res !== null"></response>
    </div>
</template>

<script>
    import Response from '@/js/vue/components/Response';
    
    export default {
        components: {Response},
        data(){
            return {
                res: null
            };
        },
        methods: {
            fire: function (choice) {
                this.res = null;
                
                axios.post('/api/process', {
                        choice : choice
                    })
                    .then(res => { 
                        this.res = res.data;
                    }).catch(err => {
                        console.log(err);
                });
            }
        }
    }
</script>