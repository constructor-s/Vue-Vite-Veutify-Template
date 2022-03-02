<template>
<nav>
    <router-link to="/">Home</router-link>
    <span> | </span>
    <router-link to="/about">About</router-link>
    <span> | </span>
    <router-link :to="{name: 'protected'}">Dashboard</router-link>
</nav>
</template>



