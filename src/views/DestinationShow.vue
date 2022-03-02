<template>
    <div>
        <h2>Hello Destionation: {{destination}}</h2>
        <router-view/> <!-- nested inside -->
        <div class="destinations">
            <router-link :to="{name: 'destination.show', params: {id: 'Earth'}}"><h2>Earth</h2></router-link>
            <router-link :to="{name: 'destination.show', params: {id: 'Moon'}}"><h2>Moon</h2></router-link>
            <router-link :to="{name: 'destination.show', params: {id: 'Mars'}}"><h2>Mars</h2></router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: { type: String, required: true }
    },
    data() {
        return {
            destination: null
        }
    },
    async created() {
        // fetch something async...
        this.destination = this.id;
    }
}
</script>
