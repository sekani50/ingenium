<template>
  <section>
    <div class="w-[95%] sm:w-[60%] h-[100vh] p-3 sm:p-6 mx-auto text-zinc-800">
       

      <div v-if="!isLoading" class="sm:pl-[40px] w-full relative h-full">
        <div @click="goback" class="cursor-pointer absolute top-1 left-[-10px]">
          <span class="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px]">
            <img
              src="/images/arrow.svg"
              alt=""
              class="w-full h-full object-cover"
            />
          </span>
        </div>
        <div class="w-full flex flex-col pl-[20px] sm:pl-0 justify-start ">
          <div class="text-lg font-semibold capitalize">{{ jobDetail.title || '--' }}</div>
          <div class="text-[17px] font-light capitalize">
            {{ jobDetail.company_name || '--' }} {{ `(${jobDetail.location})` || '--' }}
          </div>
        </div>

        <div
          class="
            flex
            items-center
            text-sm text-[15px]
            mt-3
            mb-5
            font-semibold
            space-x-2
          "
        >
          <div
            class="
              flex
              items-center
              space-x-1
              bg-gray-300 bg-opacity-50
              px-2
              py-1
            "
          >
            <span class="w-[24px] h-[24px]">
              <img
                src="/images/payment.svg"
                alt=""
                class="w-full h-full object-cover"
              />
            </span>
            <span>{{ `₦${jobDetail.salary?.toLocaleString()}`|| '--' }}</span>
          </div>

          <div
            class="
              flex
              items-center
              space-x-1
              bg-gray-300 bg-opacity-50
              px-2
              py-1
            "
          >
            <span class="w-[24px] h-[24px]">
              <img
                src="/images/work.svg"
                alt=""
                class="w-full h-full object-cover"
              />
            </span>
            <span>{{ `${jobDetail.type}` || '--' }}</span>
          </div>
        </div>

        <div class="w-full space-y-4">
         
          <div class="space-y-2">
            <div class="text-[13px] sm:text-[15px] font-medium underline">
              Skills
            </div>
            <div class="text-[13px] sm:text-[15px]">
              {{ jobDetail.skills || '--' }}
            </div>
          </div>

          <div class="space-y-2">
            <div class="text-[13px] sm:text-[15px] font-medium underline">
              Description
            </div>
            <div class="text-[13px] sm:text-[15px]">
              {{jobDetail.description || '--' }}
            </div>
          </div>

          <div class="w-full h-fit flex justify-end">
            <NuxtLink :to="`/advert/apply/${id}`"
              class="
                text-white
                py-2
                px-3
                rounded-xl
                border-0
                bg-blue-900
                text-sm
                sm:text-[16px]
              "
            >
              Apply Now
            </NuxtLink>
          </div>
        </div>
      </div>
      <div v-else class="flex items-center w-full justify-center h-[200px]">
        <div class="h-[40px] w-[40px] animate-spin rounded-full loader ">

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
      jobDetail: "",
      id:this.$route.params.id,
      isLoading:true
    };
  },
  mounted() {
    HiringService.getSingleJob(this.$route.params.id)
    
      .then((res) => {
        console.log(res);
        this.isLoading = false
        
         this.jobDetail = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    goback() {
      this.$router.back();
    },
  },
};
</script>
