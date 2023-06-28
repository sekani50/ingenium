import Vue3Toastify, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, { 
    autoClose: 10000,
    showCloseButton: true,
    showIcon: true,
    transition: 'slide', //bounce,zoom,
    hideProgressBar: true,
    position: 'bottom-right'  
});

  return {
    provide: { toast },
  };
});