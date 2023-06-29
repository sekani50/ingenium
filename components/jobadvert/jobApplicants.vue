<template>
    <div class="mt-[2%] w-full px-4">
        <div class="text-zinc-800 font-semibold text-sm sm:text-lg mb-2 sm:mb-3">Number of Applicant {{ `(${data.length})` }}</div>
      <div
        class="
          grid grid-cols-1
          gap-5
          sm:grid-cols-2
          text-zinc-800
          md:grid-cols-3
          xl:grid-cols-4
          w-full
          items-center
        "
      >
        <div v-if="!isLoading"
          v-for="(
            { media },
            index
          ) in data"
  
          :key="index"
        >
          <div
           
            
          >
          <div class="
              w-full
              h-[150px]
              relative
              rounded-xl
              border border-zinc-700
              px-2
              py-2
              sm:py-4
              sm:px-4
              overflow-hidden
            ">
            <div class="flex flex-col justify-start space-y-3 text-zinc-800 font-semibold text-sm sm:text-[16px]">
                <div class="w-full text-center">{{ index + 1 }}</div>
                <div class="">Applicant Documents</div>
                <div class="flex items-center space-x-2">
                   <span>Resume:</span>
                   <a class="flex space-x-1 items-center text-blue-700" target="_blank" :href="media[0].url">
                <span class="font-normal">{{ media[0].identifier }}</span>
                <span class="w-[24px] h-[24px]">
                <img
                  src="/images/preview.svg"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </span>
                </a>

                </div>
                <div class="flex items-center space-x-2">
                   <span>CV Document:</span>
                   <a class="flex space-x-1 items-center text-blue-700" target="_blank" :href="media[1].url">
                <span class="font-normal">{{ media[1].identifier }}</span>
                <span class="w-[24px] h-[24px]">
                <img
                  src="/images/preview.svg"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </span>
                </a>

                </div>
             
            </div>
  
  
         
        
          
          </div>
          </div>
        </div>
        <div v-else class="flex items-center w-full justify-center h-[300px]">
          <div class="h-[40px] w-[40px] animate-spin rounded-full loader ">
  
          </div>
  </div>
      </div>
    </div>
  
    <!-- content -->
  </template>
  
  <script>

  export default {
    props: ['data'],
    setup() {},
    
    methods:{
    },
  };
  </script>
  
  <style scoped></style>
  