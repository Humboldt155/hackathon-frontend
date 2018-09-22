<template>
  <div class="field">
    <b-checkbox v-model="checkboxCustom"
                true-value="Yes"
                false-value="No">
                {{ checkboxCustom }}
            </b-checkbox>
        </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
