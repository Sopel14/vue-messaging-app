<template>
    <div :class="['message-entry', { 'current-user': isCurrentUser }]">
      <img
        class="thumbnail"
        :src="message.author.avatar"
        :alt="message.author.name"
        @mouseover="showTooltip = true"
        @mouseleave="showTooltip = false"
      />
      <div v-if="showTooltip" class="tooltip">{{ message.author.name }}</div>
      <div class="message-bubble">{{ message.content }}</div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      message: Object,
      isCurrentUser: Boolean,
    },
    setup() {
      const showTooltip = ref(false);
      return { showTooltip };
    },
  };
  </script>
  
  <style>
  .message-entry {
    display: flex;
    align-items: flex-end;
    margin-bottom: 12px;
  }
  
  .message-entry.current-user {
    justify-content: flex-end;
  }
  
  .thumbnail {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 12px;
  }
  
  .message-entry.current-user .thumbnail {
    margin-left: 12px;
    margin-right: 0;
  }
  
  .message-bubble {
    max-width: 60%;
    padding: 8px;
    border-radius: 8px;
    background-color: #e0e0e0;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  
  .message-entry.current-user .message-bubble {
    background-color: #a6c8ff;
  }
  </style>
  