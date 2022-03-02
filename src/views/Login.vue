<template>
    <div class="login">
        <form class="form" @submit.prevent="login">
            <button class="btn">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            localStorage.setItem("username", "ExampleUser");
            this.$router.push({ name: 'protected' });
        }
    }
}
</script>
