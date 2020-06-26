<template>
  <div id="app">
    <div class="appbar">
      <h1>ThaiPlease</h1>
    </div>
    <div key="1" v-if="status === 'input'" class="input-form">
      <label>ใส่ข้อควาามไทย-อังกฤษที่นี่</label>
      <textarea v-model="thaiEnglish" class="input" rows="10" placeholder="Big data" />
    </div>
    <div key="2" v-else-if="status === 'loading'" class="loading">
        <h1>
          กำลังแปล
        </h1>
    </div>
    <div key="3" v-else-if="status == 'translated'" class="translated">
      <h1>คำแปล</h1>
      <p>
        {{ thai }}
      </p>
    </div>
    <div class="button-group">
      <button @click="translate" class="button is-primary">{{ actionButtonLabel }}</button>
    </div>
  </div>
</template>

<script>
import translate from './utils/translator';

export default {
  data() {
    return {
      thaiEnglish: '',
      status: 'input',
      thai: '',
    };
  },
  computed: {
    actionButtonLabel() {
      if (this.status === 'input') {
        return 'แปลภาษาไทย';
      }
      return 'ลองใหม่';
    },
  },
  methods: {
    translate() {
      // TODO: Implement translation
      if (this.status === 'input') {
        this.status = 'loading';
        this.thai = translate(this.thaiEnglish);
        setTimeout(() => {
          this.status = 'translated';
        }, 1500);
      } else {
        this.status = 'input';
      }
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
  @apply p-4 bg-blue-100;
  height: 30em;
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
.loading {
  @apply p-4 flex text-center items-center justify-center bg-blue-300 text-white font-display;
  height: 30em;
}
.loading h1 {
  @apply text-6xl;
  animation-name: loading;
  animation-duration: 0.5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.translated {
 @apply p-4;
 height: 30em;
}
.translated h1 {
  @apply text-5xl;
}
.translated h1 {
  @apply text-5xl;
}

/* Transition and Animation */
@keyframes loading {
 0% {
   transform: rotate(30deg);
 }
 100% {
   transform: rotate(-30deg);
 }
}
</style>
