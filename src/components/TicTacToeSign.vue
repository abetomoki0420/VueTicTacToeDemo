<script setup lang="ts">
import { Sign } from "../composables/ticTacToe/types" 

type Props = {
  sign: Sign
}

defineProps<Props>()

</script>

<template>
  <div v-if="sign === 'tic'">
    ○
  </div>
  <div v-else>
    ✗
  </div>
</template>