<template>
    <div>
        <SideBar />
        <Nuxt />
    </div>
</template>

<script>
import SideBar from '~/components/SideBar.vue';
export default {
    name: 'Default',
    components: {
        SideBar,
    }
}
</script>
