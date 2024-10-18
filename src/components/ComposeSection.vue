<template>
    <div class="compose-section">
      <input
        v-model="newMessage"
        placeholder="Type a message..."
        @keyup.enter="sendMessage"
      />
      <button @click="sendMessage">Send</button>
    </div>
  </template>
  
  <script>
  import { mockSendMessage } from '../data/mockApi';
  
  export default {
    data() {
      return {
        newMessage: '',
      };
    },
    methods: {
      async sendMessage() {
        if (!this.newMessage.trim()) return;
  
        try {
          const sentMessage = await mockSendMessage(this.newMessage);
          this.$emit('messageSent', sentMessage); 
          this.newMessage = '';
        } catch (error) {
          console.error('Error sending message:', error.message);
          alert('Failed to send message. Please try again.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .compose-section {
    display: flex;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #ddd;
    background-color: #ffffff;
  }
  
  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    transition: border-color 0.2s;
  }
  
  input:focus {
    border-color: #007bff;
  }
  
  button {
    margin-left: 10px;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.2s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  