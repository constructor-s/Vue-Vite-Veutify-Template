<template>
    <div>
        <h1>This Information is Protected for {{username}}</h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: localStorage.getItem("username")
        };
    },
    methods: {
        logout() {
            localStorage.removeItem("username");
            this.$router.push({ name: 'Home' });
        }
    }
}
</script>
