<template>
  <div class="chat-room">
    <div class="header">
      <button @click="goBack" class="back-btn">←</button>
      <h1 class="room-title">{{ roomName }}</h1>
    </div>
    <div class="messages">
      <div v-for="message in messages" :key="message.id" class="message" :class="{ 'my-message': message.isMine }">
        <div class="message-content" v-html="formatMessage(message.text)"></div>
      </div>
    </div>
    <div class="input-container">
      <textarea v-model="newMessage" @keyup.enter="handleKeyUp" class="input" placeholder="Type a message..."></textarea>
      <button @click="sendMessage" class="send-btn">Send</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const roomName = ref('Chat Room'); // 예시로 기본 채팅방 이름을 설정
const messages = ref<any[]>([
  // 예시 데이터, 실제 메시지는 웹소켓을 통해 받아야 합니다.
  { id: 1, text: 'Hello there!\nHow are you?', isMine: false },
  { id: 2, text: 'Hi! How are you doing?\nI am good, thanks!', isMine: true }
]);
const newMessage = ref('');

// 뒤로 가기 버튼 클릭 시 페이지 이동
const goBack = () => {
  router.back();
};

// 메시지 전송 함수
const sendMessage = () => {
  if (newMessage.value.trim() === '') return;

  // 실제 메시지 전송 로직 필요 (예: 웹소켓으로 메시지 전송)
  messages.value.push({ id: Date.now(), text: newMessage.value, isMine: true });

  newMessage.value = '';
};

// Enter 키 입력 처리 함수
const handleKeyUp = (event: KeyboardEvent) => {
  if (event.shiftKey && event.key === 'Enter') {
    // 줄바꿈 처리
    return;
  }
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
};

// 메시지 포맷팅 함수
const formatMessage = (text: string) => {
  return text.replace(/\n/g, '<br/>'); // 줄바꿈 문자를 <br>로 변환
};

// 페이지 로딩 시 초기 설정
onMounted(() => {
  // 채팅방 데이터를 로드하거나 웹소켓 연결을 설정하는 로직이 필요합니다.
});
</script>

<style scoped>
.chat-room {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f0f5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.header {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #007aff;
  color: #fff;
  border-bottom: 1px solid #ccc;
}

.back-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 1rem;
}

.room-title {
  font-size: 1.2rem;
  margin: 0;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.message {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
}

.message.my-message {
  flex-direction: row-reverse;
}

.message-content {
  max-width: 70%;
  background-color: #fff;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
  white-space: pre-wrap; /* 줄바꿈 및 공백 유지 */
}

.input-container {
  padding: 1rem;
  border-top: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.input {
  flex: 1;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: none; /* 텍스트 영역 크기 조절 비활성화 */
}

.input:focus {
  border-color: #007aff;
  outline: none;
}

.send-btn {
  background-color: #007aff;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.send-btn:hover {
  background-color: #005bb5;
}
</style>
