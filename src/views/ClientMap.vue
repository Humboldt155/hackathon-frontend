<template>
    <section>
        <!--<div style="width: 100px; height: 100px">Карта</div>-->
        <iframe :src="src_frame" width="100%" height="650px" frameborder="1"> </iframe>
    </section>
</template>

<script>
    export default {
        name: "client-map",
        data () {
            return {
                src_frame: "http://52.191.11.99/en-US/embed?s=%2FservicesNS%2Fadmin%2Flm_geo_analytics%2Fsaved%2Fsearches%2Ftest_map&oid=4n32YNAQ7BecH3ZGrFreT4RxgemcZLrMLRLJiSNKM9UuiKTij_iRPoiRoeM47vypkZow0DtDAO_R6ugUizV6r593la9Ij44BwhqEkTfmbj9WWeZhpahaBqkUEHjT7K1NiY5LB6yQjbjXwH_GGN"
            }
        }
    }
</script>

<style scoped>

</style>
