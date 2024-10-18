<template>
    <div class="conversation" ref="conversationRef">
      <div
        v-for="message in conversation"
        :key="message.id"
        :class="['message', message.author.id === currentUser.id ? 'sent' : 'received']"
      >
        <img :src="message.author.avatar" alt="Author avatar" class="avatar" />
        <div class="message-content">
          <div class="author-name">{{ message.author.name }}</div>
          <div class="content">{{ message.content }}</div>
          <div class="date">{{ formatDate(message.date) }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mockFetchConversation, mockFetchUser } from '../data/mockApi';
  
  export default {
    data() {
      return {
        conversation: [],
        currentUser: null,
      };
    },
    async created() {
      try {
        this.currentUser = await mockFetchUser();
        this.conversation = await mockFetchConversation();
      } catch (error) {
        console.error('Error fetching conversation:', error.message);
      }
    },
    methods: {
      formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      },
      addMessage(newMessage) {
        this.conversation.push(newMessage);
        this.$nextTick(() => {
          const conversationContainer = this.$refs.conversationRef;
          conversationContainer.scrollTop = conversationContainer.scrollHeight;
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .conversation {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    max-width: 100%;
    margin: 0;
    background-color: #f1f1f1;
    border-radius: 10px;
    height: 70vh;
    overflow-y: auto;
  }
  
  .message {
    display: flex;
    align-items: flex-end;
  }
  
  .message.received {
    justify-content: flex-start;
  }
  
  .message.sent {
    justify-content: flex-end;
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 10px;
  }
  
  .message-content {
    background-color: #ffffff;
    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 70%;
    position: relative;
  }
  
  .message.received .message-content {
    background-color: #e0e0e0;
  }
  
  .author-name {
    font-size: 0.8rem;
    color: #555;
    margin-bottom: 2px;
  }
  
  .content {
    font-size: 1rem;
    margin-bottom: 5px;
  }
  
  .date {
    font-size: 0.7rem;
    color: #bbb;
    position: absolute;
    bottom: 5px;
    right: 10px;
  }
  </style>
  