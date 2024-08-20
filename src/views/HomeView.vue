<template>
  <div class="home">
    <h1>Welcome to the Gammy</h1>
    <div class="buttons">
      <button @click="goToSignup" class="btn btn-primary">Sign Up</button>
      <button @click="goToLogin" class="btn btn-secondary">Log In</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToSignup = () => {
  router.push('/signup');
};

const goToLogin = () => {
  router.push('/login');
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 2rem;
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

.btn-secondary {
  background-color: #ffffff;
  color: #007aff;
  border: 1px solid #007aff;
}

.btn-secondary:hover {
  background-color: #f0f8ff;
}
</style>
