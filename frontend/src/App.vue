<!-- Project Group 9 FrontEnd Application -->
<script>
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API
import { useLoggedInUserStore } from "@/store/loggedInUser";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)
import { useServiceListStore } from "@/store/serviceStore";

export default {
  name: 'App',
  components: {Pie},
  data() {
    const user = useLoggedInUserStore();
    const list = useServiceListStore();
    return {
      orgName: 'Dataplatform',
      user,
      list
      //chartConfig
    }
  },
  created() {
    axios.get(`${apiURL}/org`).then((res) => {
      this.orgName = res.data.name
      console.log(this.orgName)
      //console.log(this.$usrRole)
      console.log("test")
      console.log(this.user.role)
    })
  }
}

</script> 
<!-- Main -->
<template>
  <main class="flex flex-row">
    <div id="_container" class="h-screen">
      <header class="w-full">
        <section class="text-center">
          <img class="m-auto" src="@\assets\DanPersona.svg" />
        </section>
        <nav class="mt-10">
          <ul class="flex flex-col gap-4">
            <li v-if="user.isLoggedIn">
              <router-link to="" v-on:click="user.logout()">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >login</span
                >
                User Log-Out
              </router-link>
            </li>
            <li v-if="!user.isLoggedIn">
              <router-link to="login">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >login</span
                >
                User Log-In <!-- User Sign In Tab -->
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >dashboard</span
                >
                Dashboard <!-- Dashboard Tab -->
              </router-link>
            </li>
            <li v-if="user.isLoggedIn && user.role == 'editor'">
              <router-link to="/intakeform">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >people</span
                >
                Client Intake Form <!-- Client Intake Tab -->
              </router-link>
            </li>
            <li v-if="user.isLoggedIn && user.role == 'editor'">
              <!-- v-if="isEditor" -->
              <router-link to="/eventform">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >event</span
                >
                Create Event <!-- Create Event Tab -->
              </router-link>
            </li>
            <li v-if="user.isLoggedIn && user.role == 'editor'">
              <!-- v-if="isEditor" -->
              <router-link to="/serviceform">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >content_paste</span
                >
                Create Service <!-- Create Service Tab -->
              </router-link>
            </li>
            <li v-if="user.isLoggedIn">
              <!-- v-if="isEditor || isViewer" -->
              <router-link to="/findclient">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Client <!-- Find Client Tab -->
              </router-link>
            </li>
            <li v-if="user.isLoggedIn">
              <!-- v-if="isEditor || isViewer" -->
              <router-link to="/findevents">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Event <!-- Find Event Tab -->
              </router-link>
            </li>
            <li v-if="user.isLoggedIn">
              <!-- v-if="isEditor || isViewer" -->
              <router-link to="/findservices">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Service  <!-- Find Service Tab -->
              </router-link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <div class="grow w-4/5">
      <section
        class="justify-end items-center h-24 flex"
        style="background: linear-gradient(250deg, #c8102e 70%, #efecec 50.6%)"
      >
        <h1 class="mr-20 text-3xl text-white">{{ this.orgName }}</h1>
      </section>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </main>


</template>
<style>
#_container {
  background-color: #c8102e;
  color: white;
  padding: 18px;
}
</style>
