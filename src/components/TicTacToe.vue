<script setup lang="ts">
import TicTacToeSign from './TicTacToeSign.vue';
import { useTitTacToe } from '../composables/ticTacToe/useTicTacToe';
import { Sign } from '../composables/ticTacToe/types';

const { resultStatus,currentSign, getCell, setSign, restart } = useTitTacToe()

const ticTac = (sign: Sign) => sign === "tic" ? "○" : "✗" 

</script>

<template>
  <div>
    <div v-if="resultStatus.finished ">
      <div v-if="resultStatus.winner">
        winner: {{ ticTac(resultStatus.winner) }}
      </div>
      <div v-else>
        draw
      </div>
    <button @click="restart">restart</button>
    </div>
    <div v-else>current: {{ ticTac(currentSign) }}</div>
    <div class="row" v-for="y in 3" :key="y">
      <div class="col" v-for="x in 3" :Key="x" @click="setSign(x - 1,y - 1)">
        <TicTacToeSign
          v-if="getCell(x - 1 , y - 1)?.sign"
          :sign="getCell(x - 1 , y - 1).sign"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

.row {
  display: flex;
}

.col {
  display: flex;
  justify-content: center;
  flex: 1;
  border: 1px solid #c0c0c0;
  height: 32px;
  padding: 8px;
  background: #fbfbfb;
}

</style>