<template>
  <div class="login">
    <h1>Log In</h1>
    <form @submit.prevent="login" class="form">
      <input v-model="nickname" placeholder="Enter your nickname" class="input" required />
      <button type="submit" class="btn btn-primary">Log In</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const nickname = ref('');
const errorMessage = ref('');

const login = async () => {
  // 로그인 로직 (여기서는 간단하게 닉네임이 빈 문자열이 아닌지 확인)
  if (nickname.value.trim() === '') {
    errorMessage.value = 'Nickname cannot be empty';
    return;
  }

  const success = await authenticateUser(nickname.value);

  if (success) {
    router.push('/chat-categories'); // 인증 성공 시 채팅 카테고리 페이지로 이동
  } else {
    errorMessage.value = 'Login failed';
  }
};

const authenticateUser = async (nickname: string): Promise<boolean> => {
  // 여기에 실제 인증 로직을 추가합니다.
  // 예를 들어, 서버에 로그인 요청을 보내고 결과를 확인합니다.
  // 이 예제에서는 임시로 항상 true를 반환합니다.
  return true;
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.form {
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.input:focus {
  border-color: #007aff;
  outline: none;
}

.btn {
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #007aff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0051a8;
}

.error-message {
  color: #d9534f;
  font-size: 0.875rem;
}
</style>