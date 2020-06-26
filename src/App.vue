<template>
  <div id="app">
    <div class="appbar">
      <h1>ThaiPlease</h1>
    </div>
    <div v-if="status === 'input'" class="input-form">
      <label>ใส่ข้อควาามไทย-อังกฤษที่นี่</label>
      <textarea v-model="thaiEnglish" class="input" rows="10" placeholder="Big data" />
    </div>
    <div v-if="status === 'loading'" class="loading">
       Loading
    </div>
    <div class="button-group">
      <button @click="translate" class="button is-primary">แปลภาษาไทย</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thaiEnglish: '',
      status: 'input',
    };
  },
  methods: {
    translate() {
      this.status = 'loading';
    },
  },
  name: 'app',
};
</script>

<style lang="postcss">
.appbar {
  @apply text-center text-white bg-blue-400 text-5xl;
}
.input {
  @apply p-4 text-black border w-full;
}
.input-form {
  @apply p-4;
}
.input-form label {
  @apply my-4 block font-display text-3xl;
}
.button-group {
  @apply py-4 px-8 flex justify-center items-center text-center;
}
.button {
  @apply p-2 cursor-pointer border font-display;
}
.button.is-primary {
  @apply text-white bg-blue-400;
}
.button.is-primary:hover {
  @apply bg-blue-500;
}
</style>
