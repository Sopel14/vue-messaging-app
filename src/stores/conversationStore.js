import { defineStore } from 'pinia';
import { mockFetchConversation, mockFetchUser, mockSendMessage } from '../data/mockApi';

export const useConversationStore = defineStore('conversation', {
  state: () => ({
    conversation: [],
    user: null,
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchConversation() {
      this.isLoading = true;
      try {
        this.conversation = await mockFetchConversation();
      } catch (error) {
        this.error = 'Failed to fetch conversation';
      } finally {
        this.isLoading = false;
      }
    },
    async fetchUser() {
      this.isLoading = true;
      try {
        this.user = await mockFetchUser();
      } catch (error) {
        this.error = 'Failed to fetch user';
      } finally {
        this.isLoading = false;
      }
    },
    async sendMessage(content) {
      const message = {
        id: Date.now(),
        author: this.user,
        content,
      };

      this.conversation.push(message);

      try {
        await mockSendMessage(message);
      } catch (error) {
        this.conversation.pop();
        this.error = 'Failed to send message';
      }
    },
  },
});
