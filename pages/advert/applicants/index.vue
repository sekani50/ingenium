<template>
  <section>
    <div class="text-black w-full bg-white h-full"></div>
  </section>
  <!-- content -->
</template>

<script>
import { HiringService } from "~/services";
import { useAuthStore } from "~/store/auth";
export default {
  setup() {
    definePageMeta({
      layout: "app",
      middleware: ["auth"],
    });
    const { $toast } = useNuxtApp();
    const auth = useAuthStore();
    return {
      $toast,
      auth,
    };
  },

  data() {
    return {
      isPost: false,
      availableJobs: [],
      isLoading: true,
      accountType: "",
      issidebar: false,
    };
  },
  computed: {},
  mounted() {
    HiringService.jobApplicants()
      .then((res) => {
        console.log(res);
        //const { data } = res.data;

        this.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    togglePost() {
      this.isPost = !this.isPost;
    },
    toggleSidebar() {
      this.issidebar = !this.issidebar;
    },
  },
};
</script>
