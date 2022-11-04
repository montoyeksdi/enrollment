<template>
    <body>
        <link href='https://css.gg/home.css' rel='stylesheet'>
        <link href='https://css.gg/phone.css' rel='stylesheet'>
        <link href='https://css.gg/danger.css' rel='stylesheet'>
        <link href='https://css.gg/arrow-left-r.css' rel='stylesheet'>
        <div class="sidebar-container">
            <div class="home-container">
                <NuxtLink to="/Home">
                    <button class="btn-home"><i class="gg-home"></i></button>
                </NuxtLink>
            </div>
            <div class="contact-container">
                <NuxtLink to="/Contact">
                    <button class="btn-contact"><i class="gg-phone"></i></button>
                </NuxtLink>
            </div>
            <div class="about-container">
                <NuxtLink to="/About">
                    <button class="btn-about"><i class="gg-danger"></i></button>
                </NuxtLink>
            </div>
            <div class="logout-container">
                <NuxtLink to="/">
                    <button class="btn-about"><i class="gg-arrow-left-r"></i></button>
                </NuxtLink>
            </div>
        </div>
</body>
</template>

<script>
export default {
    name: 'SideBar',
}
</script>

<style>
    .sidebar-container {
        background-color: #F5F5F5;
        opacity: 1;
        height: 100%;
        width: 70px;
        position: fixed;
        margin-left: 1296px;
        z-index: 1;
    }

    .home-container, .contact-container, .about-container, .logout-container{
        height: 80px;
        width: 100%;
    }

    .logout-container {
        margin-top: 20rem;
    }

    .btn-home, .btn-contact, .btn-about {
        height: 100%;
        width: 100%;
        border: none;
        color: grey;
        background-color: #F5F5F5;
    }

    .btn-home:hover, .btn-contact:hover, .btn-about:hover {
        background-color: #FF8300;
        color: white;
    }

    .btn-home i, .btn-contact i, .btn-about i {
        margin-left: 20px;
        transition: all .2s ease-in-out;
    }

</style>
