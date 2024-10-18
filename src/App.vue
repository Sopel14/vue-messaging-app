<template>
  <div id="app" class="app-container">
    <Conversation ref="conversationRef" />
    <ComposeSection @messageSent="handleNewMessage" />
  </div>
</template>

<script>
import Conversation from './components/ConversationArea.vue';
import ComposeSection from './components/ComposeSection.vue';

export default {
  components: {
    Conversation,
    ComposeSection,
  },
  methods: {
    handleNewMessage(message) {
      this.$refs.conversationRef.addMessage(message);
    },
  },
};
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 600px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
</style>
