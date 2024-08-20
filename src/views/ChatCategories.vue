<template>
  <div class="chat-categories">
    <nav class="navbar">
      <div class="search-container">
        <input type="text" v-model="searchQuery" placeholder="Search for chat rooms..." class="search-input" />
        <button @click="search" class="search-btn">Search</button>
      </div>
      <div class="user-info">
        <span class="username">{{ nickname }}</span>
        <button @click="logout" class="logout-btn">Log Out</button>
      </div>
    </nav>
    <div class="content">
      <div class="card-container">
        <div v-for="room in filteredChatRooms" :key="room.id" class="card">
          <img :src="room.image" alt="Game Image" class="card-image" />
          <div class="card-details">
            <h3 class="card-title">{{ room.name }}</h3>
            <p class="card-members">{{ room.members }} people in the room</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

// 상태 관리
const searchQuery = ref('');
const chatRooms = ref<any[]>([]);
const nickname = ref('JohnDoe'); // 예시로 기본 닉네임을 설정
const router = useRouter();

// 예시 데이터 로딩 함수
const loadChatRooms = async () => {
  // 실제 API 호출로 대체 필요
  chatRooms.value = [
    { id: 1, name: 'Game Room 1', image: 'https://via.placeholder.com/150', members: 10 },
    { id: 2, name: 'Game Room 2', image: 'https://via.placeholder.com/150', members: 5 },
    { id: 3, name: 'Game Room 3', image: 'https://via.placeholder.com/150', members: 8 },
    { id: 4, name: 'Game Room 4', image: 'https://via.placeholder.com/150', members: 12 },
    // 추가 데이터...
  ];
};

// 검색 버튼 클릭 시 호출되는 함수
const search = () => {
  // 실제 검색 로직을 추가합니다.
  // 예를 들어, 서버에 검색 쿼리를 보내고 결과를 업데이트합니다.
  console.log(`Searching for: ${searchQuery.value}`);
};

// 필터링된 채팅방 리스트
const filteredChatRooms = computed(() => {
  if (!searchQuery.value) return chatRooms.value;
  return chatRooms.value.filter(room => room.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

// 로그아웃 함수
const logout = () => {
  // 실제 로그아웃 로직 필요
  router.push('/login');
};

// 페이지 로딩 시 데이터 로딩
onMounted(() => {
  loadChatRooms();
});
</script>

<style scoped>
.chat-categories {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f0f5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #007aff;
  color: #fff;
}

.search-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
}

.search-input {
  width: 60%;
  padding: 0.5rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
}

.search-btn {
  background-color: #fff;
  color: #007aff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-btn:hover {
  background-color: #f0f8ff;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.username {
  font-size: 1rem;
}

.logout-btn {
  background-color: #fff;
  color: #007aff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-btn:hover {
  background-color: #f0f8ff;
}

.content {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: calc(25% - 1rem);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-details {
  padding: 1rem;
}

.card-title {
  font-size: 1.2rem;
  margin: 0;
  color: #333;
}

.card-members {
  font-size: 0.875rem;
  color: #777;
}
</style>
