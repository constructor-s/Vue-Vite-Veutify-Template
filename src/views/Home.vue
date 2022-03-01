<template>
    <div class="home">
        <h1>Home</h1>
        <div class="destinations">
            <router-link :to="{name: 'destination.show', params: {id: 'Earth'}}"><h2>Earth</h2></router-link>
            <router-link :to="{name: 'destination.show', params: {id: 'Moon'}}"><h2>Moon</h2></router-link>
            <router-link :to="{name: 'destination.show', params: {id: 'Mars'}}"><h2>Mars</h2></router-link>
        </div>
    </div>
</template>
