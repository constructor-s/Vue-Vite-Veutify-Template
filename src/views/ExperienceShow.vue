<template>
    <div>
        <h3>Experience {{experienceSlug}} on {{id}}!</h3>
    </div>
</template>

<script>
export default {
    props: {
        id: { type: String, required: true },
        experienceSlug: { type: String, required: true }
    },
}
</script>
