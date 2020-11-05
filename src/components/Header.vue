<template>
    <nav class="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/daveportfolio/#/">
        <img src="" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <router-link to='/about' class="navbar-item">About</router-link>
            <router-link to='/profile' class="navbar-item">Profile</router-link>
        </div>
    </div>
    </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>