const bob = {
    id: 23,
    firstName: 'Bob',
    lastName: 'Greatlance',
    thumbnail: 'https://images.generated.photos/-xGFYXL6ts6pLJa6UKFheSLpVvkmH6sSbmHL7WfYMos/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDA2MDc1LmpwZw.jpg',
  };
  
  const jack = {
    id: 48,
    firstName: 'Jack',
    lastName: 'Dowager',
    thumbnail: 'https://images.generated.photos/S1STKILAq-VlqXK3Exeq78FZuY_oimmVFg96qBHE8N0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDA0NjE3LmpwZw.jpg',
  };
  
  const messages = [
    {
      id: 1,
      from: bob,
      message: "Hey bro, how's things?",
      date: '2020-04-07 10:03:23',
    },
    {
      id: 2,
      from: bob,
      message: `I was working in the garden and just thought of you!
  Hope you're not too worried about everything that's going on right now.`,
      date: '2020-04-07 10:03:45',
    },
    {
      id: 3,
      from: jack,
      message: 'Heeey! Long time! Thanks for your message, man!',
      date: '2020-04-07 10:06:15',
    },
    {
      id: 4,
      from: jack,
      message: 'I am doing quite alright, thanks. How about you?',
      date: '2020-04-07 10:06:24',
    },
    {
      id: 5,
      from: bob,
      message: `Can't complain.
  I was watching this movie the other night that really reminded me of our first project working together.
  There were these three 17-year-olds who had just heard of Python and decided to build the next great thing in social networking, so they spent about a week pulling off all-nighters and barely got anywhere :))
  I think you can imagine what happens next 🙃`,
      date: '2020-04-07 10:07:01',
    },
    {
      id: 6,
      from: jack,
      message: '😂😂😂 Did they end up driving to the seaside and sleeping in the sun until they got severe sunburn like we did?',
      date: '2020-04-07 10:08:55',
    },
    {
      id: 7,
      from: bob,
      message: `Something not very far from that!`,
      date: '2020-04-07 10:09:30',
    },
  ];
  
  export const mockFetchConversation = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return messages.map((msg) => ({
      id: msg.id,
      author: {
        id: msg.from.id,
        name: `${msg.from.firstName} ${msg.from.lastName}`,
        avatar: msg.from.thumbnail,
      },
      content: msg.message,
      date: msg.date,
    }));
  };
  
  export const mockFetchUser = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
  
    return {
      id: bob.id,
      name: `${bob.firstName} ${bob.lastName}`,
      avatar: bob.thumbnail,
    };
  };
  
  export const mockSendMessage = async (messageContent) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
  
    if (Math.random() < 0.1) {
      throw new Error('Network error: Failed to send message');
    }
  
    const newMessage = {
      id: messages.length + 1,
      from: bob,
      message: messageContent,
      date: new Date().toISOString(),
    };
  
    messages.push(newMessage);
  
    return {
      id: newMessage.id,
      author: {
        id: newMessage.from.id,
        name: `${newMessage.from.firstName} ${newMessage.from.lastName}`,
        avatar: newMessage.from.thumbnail,
      },
      content: newMessage.message,
      date: newMessage.date,
    };
  };
  