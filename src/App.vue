<template>
  <div id="app">
    <div class="appbar">
      <h1>ThaiPlease</h1>
    </div>
    <div class="flex-container">
      <img class="decoration left" src="./assets/border-left-bottom.png" />
      <img class="decoration right" src="./assets/border-right-top.png" />
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
        <p class="translated-text">
          {{ thai }}
        </p>
      </div>
      <div class="button-group">
        <button @click="translate" class="button is-primary">{{ actionButtonLabel }}</button>
      </div>
    </div>
    <credit />
  </div>
</template>

<script>
import Credit from './components/Credit.vue';
import translate from './utils/translator';

export default {
  components: {
    Credit,
  },
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
  @apply text-center text-mustard bg-chestnut text-5xl;
}
.input {
  @apply p-4 text-black border w-full;
}
.input-form {
  @apply p-4 bg-mustard;
  height: 30em;
}
.input-form label {
  @apply my-4 block text-chestnut font-display text-3xl;
}
.button-group {
  @apply py-4 px-8 flex justify-center items-center text-center;
}
.button {
  @apply p-2 cursor-pointer border font-display;
}
.button.is-primary {
  @apply text-mustard bg-chestnut;
}
.button.is-primary:hover {
  @apply bg-honey text-chestnut;
}
.loading {
  @apply p-4 flex text-center items-center justify-center bg-mustard text-chestnut font-display;
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
  @apply text-5xl text-chestnut;
}
.translated h1 {
  @apply text-5xl;
}
.translated-text {
  white-space: pre;
  height: 15em;
  overflow-y: scroll;
  @apply border border-chestnut bg-white p-4;
}
.decoration {
  display: none;
}

@screen lg {
  .flex-container {
    @apply flex flex-col justify-center items-center flex-wrap pt-8 relative;
  }
  .flex-container *:not(button) {
    @apply w-full;
  }
  .loading, .input-form, .translated {
    @apply px-16;
  }
  .input-form label, .input-form textarea {
    @apply w-3/4 mx-auto block;
  }
  .translated h1, .translated p {
    @apply w-3/4 mx-auto block;
  }
  .button {
    @apply text-xl p-2;
  }
  .decoration {
    @apply absolute inline;
    width: 360px !important;
  }
  .decoration.left {
    bottom: 0;
    left:0;
  }
  .decoration.right {
    top:0;
    right: 0;
  }
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
