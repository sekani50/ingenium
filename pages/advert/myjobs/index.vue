<template>
    <section>
      <div class="text-zinc-800 w-full bg-white h-full">
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
      
        <div class="w-full sm:w-[80%] mx-auto sm:py-4 sm:px-8 py-3 px-2 ">
            <div class="font-semibold text-[15px] sm:text-xl py-2">My Jobs</div>
            <div v-for="({jobadvert}, index) in appliedJobs" :key="index">
                <div class="py-2 myjob-border flex flex-col">
                    <div class="text-blue-700 bg-blue-700 bg-opacity-20 px-2 py-1 text-[12px] sm:text-sm w-fit rounded-md">applied</div>
                    <div>
            <div class="text-[16px] sm:text-lg font-semibold capitalize">{{ jobadvert.title }}</div>
            <div class="text-[15px] sm:text-[17px] font-light capitalize">
              {{ jobadvert.company_name }}
            </div>
            <div class="text-[15px] sm:text-[17px] font-light capitalize">
              {{ jobadvert.location }}
            </div>
          </div>
                </div>
            </div>

        </div>
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
        appliedJobs: [],
        isLoading: true,
        accountType: '',
        issidebar: false,
      };
    },
    computed: {
  
    },
    mounted() {
      
      const { authUser } = useAuthStore();
      //console.log(authUser.account.account_type)
      this.accountType = authUser.account.account_type;
     this.accountType === 2 && HiringService.appliedJobs()
        .then((res) => {
          console.log(res);
          const { data } = res.data;
         
            this.appliedJobs = data
            
  
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
  