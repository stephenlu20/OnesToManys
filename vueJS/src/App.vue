<template>
  <div>
    <h1>API Viewer</h1>

    <button @click="fetchData('/user')">Load Users</button>
    <button @click="fetchData('/template')">Load Templates</button>
    <button @click="fetchData('/activity')">Load Activities</button>

    <ul>
      <li v-for="(item, index) in items" :key="index">
        <pre>{{ formatItem(item) }}</pre>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    async fetchData(endpoint) {
      try {
        const response = await fetch(`http://localhost:8080${endpoint}`);
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        this.items = await response.json();
      } catch (err) {
        console.error(err);
      }
    },
    formatItem(item) {
      return JSON.stringify(item, null, 2);
    }
  }
}
</script>

<style>
button {
  margin-right: 8px;
  margin-bottom: 12px;
}

pre {
  background: #f5f5f5;
  padding: 8px;
  border: 1px solid #ddd;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #222;
  max-width: 50rem;
  padding: 2rem;
  margin: auto;
  background: #fafafa;
}

img {
  max-width: 100%;
}

a {
  color: #5eb5f4;
}

h1,
h2,
strong {
  color: #1e60ca;
}
</style>
