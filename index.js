import { defineStore } from 'pinia';
import { mockFetchConversation, mockFetchUser, mockSendMessage } from '../mockApi';

export const useChatStore = defineStore('chat', {
  state: () => ({
    conversation: [],
    currentUser: null,
  }),
  actions: {
    async fetchConversation() {
      try {
        this.conversation = await mockFetchConversation();
      } catch (error) {
        console.error('Error fetching conversation:', error.message);
      }
    },
    async fetchUser() {
      try {
        this.currentUser = await mockFetchUser();
      } catch (error) {
        console.error('Error fetching user:', error.message);
      }
    },
    async sendMessage(messageContent) {
      try {
        const newMessage = await mockSendMessage(messageContent);
        this.conversation.push(newMessage);
      } catch (error) {
        console.error('Error sending message:', error.message);
      }
    },
  },
});
