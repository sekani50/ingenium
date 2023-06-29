<template>
  <section>
    <div class="text-zinc-800 w-full p-2 sm:p-4 bg-white h-[100vh]">
      <div class="h-[185px] inset-x-0 w-full relative">
          <img
            src="/images/resources/linkedinheaders-desktop.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
          <span
            class="absolute w-full h-full inset-0 bg-blue-950 bg-opacity-70"
          ></span>
          <button
            @click="toggleSidebar"
            
            class="
              absolute
              border-2
              bottom-4
              text-blue-950
              right-5
              border-blue-950
              w-fit
              px-3
              py-2
              rounded-3xl
              bg-white
              flex
              items-center
              justify-center
            "
          >
            <span>View Dashboard</span>
          </button>
        </div>
  
        <PartialsRightSidebar
          :togglePost="togglePost"
          :toggleSidebar="toggleSidebar"
          :issidebar="issidebar"
          :accountType="accountType"
        />
     
     
      <div @click="goback" class="cursor-pointer w-[22px] h-[22px] sm:w-[28px] sm:h-[28px]">
          <span class="w-full h-full">
            <img
              src="/images/arrow.svg"
              alt=""
              class="w-full h-full object-cover"
            />
          </span>
        </div>
      <JobadvertJobApplicants :data="applicants"/>
    </div>
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
      applicants: [],
      isLoading: true,
      accountType: "",
      issidebar: false,
    };
  },
  computed: {},
  mounted() {
    const { authUser } = useAuthStore();
   // console.log(authUser.account.account_type);
    this.accountType = authUser.account.account_type;
    this.accountType === 1 && HiringService.jobApplicants(this.$route.params.id)
      .then((res) => {
        console.log(res);
        const { data } = res.data;
        this.applicants = data
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
    goback() {
      this.$router.back();
    },
  },
};
</script>
