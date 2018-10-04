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
                src_frame: "http://52.191.11.99/en-US/embed?s=%2FservicesNS%2Fadmin%2Fsearch%2Fsaved%2Fsearches%2Fgeo_hackathon&oid=5ICR8ghZ%5Eom6JVjnisTcHc9r71QaPPGm%5Evb8YFVFPfgIdq6ZQuQ%5EanGrnIPoFL5D5FqXGrQO7GfJFNC%5EqM_cqBVZ9IkmVh4rHYn6kSC0vQIWHgHygcVlunmkEUTkPkNm9Hjs4o"
            }
        }
    }
</script>

<style scoped>

</style>
