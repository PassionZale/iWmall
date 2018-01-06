<template>
    <div class="app-page">
        <router-view></router-view>
        <navbar></navbar>
    </div>
</template>

<script>
import Navbar from "./components/_layouts/Navbar.vue";

export default {
    el: '#app',
    components: {
        Navbar
    },
    replace: false,
    data() {
        return {
        user: ""
        };
    },
    created() {
        this.fetchUser();
    },
    methods: {
        fetchUser: function() {
        let vm = this;
        let userInfo = localStorage.getItem("userInfo");
        let shopConfig = localStorage.getItem("shopConfig");
        if (userInfo) {
            vm.$set("user", JSON.parse(userInfo));
        } else {
            vm.$http.get("/api/userinfo").then(function(response) {
            vm.$set("user", response.data);
            localStorage.setItem("userInfo", JSON.stringify(response.data));
            });
        }
        if (!shopConfig) {
            vm.$http.get("/api/shopconfig").then(function(response) {
            localStorage.setItem("shopConfig", JSON.stringify(response.data));
            });
        }
        }
    }
};
</script>
