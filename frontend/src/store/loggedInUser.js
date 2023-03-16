import { defineStore } from 'pinia'

//defining a store
export const useLoggedInUserStore = defineStore({
  // id is only required for devtools with the Pinia store
  id: 'loggedInUser',
  //central part of the store
  state: () => {
    return {
      role: "",
      isLoggedIn: false,
    }
  },
  // equivalent to methods in components, perfect to define business logic
  actions: {
    async login(email, password) {
      try {
        const response = await apiLogin(email, password);
        this.$patch({
          isLoggedIn: response.isAllowed,
          role: response.role,
        })
        this.$router.push("/");
      } catch(error) {
        console.log(error)
      }
    },
    logout() {
      this.patch({
        role: "",
        isLoggedIn: false
      });

      // we could do other stuff like redirecting the user
    }
  }
});

//simulate a login - we will later use our backend to handle authentication
function apiLogin(u, p) {
  if (u === "editor@gmail.com" && p === "default") return Promise.resolve({ isAllowed: true, role: "editor" });
  if (u === "viewer@gmail.com" && p === "default") return Promise.resolve({ isAllowed: true, role: "viewer" });
  // if (p === "ed") return Promise.resolve({ isAllowed: false });
  alert('Username/Password is incorrect.')
  return Promise.reject(new Error("invalid credentials"));
}

