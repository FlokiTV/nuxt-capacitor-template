<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-capacitor
      </h1>
      <div class="links"> {{networkStatus}} </div>
      <button @click="installApp">Install</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      networkStatus: ''
    }
  },
  created(){
    this.checkNetwork()
    this.$network.addListener('networkStatusChange', (status) => {
      this.networkStatus = status.connected ? 'online' : 'offline'
    })
    this.$toast.show({ text: 'I am a toast!' })
  },
  methods: {
    async checkNetwork() {
      this.networkStatus = (await this.$network.getStatus()).connected
        ? 'online'
        : 'offline'
    },
    showToast() {
      this.$toast.show({ text: 'I am a toast!' })
    },
    installApp() {
      // Show the install promp()
      this.$store.state.deferredPrompt.prompt()
      // Wait for the user to respond to the prompt
      this.$store.state.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          this.$toast.show('Installation started!')
        } else {
          this.$toast.show('Installation canceled!')
        }
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
