<script setup  >
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
// import {onBeforeUnmount, onMounted, ref} from "vue";
//
// const isDarkMode = ref(false);
// let observer;
//
// onMounted(() => {
//   const html = document.querySelector("html") as HTMLElement;
//   isDarkMode.value = html.classList.contains("dark");
//   // watch theme change
//   observer = new MutationObserver(() => {
//     isDarkMode.value = html.classList.contains("dark");
//   });
//   observer.observe(html, {
//     attributeFilter: ["class"],
//     attributes: true,
//   });
// });
//
// onBeforeUnmount(() => {
//   observer.disconnect();
// });
</script>


<template>
  <ParentLayout>
    <template #page-bottom>
      <span>footer</span>
<!--      <CommentService :darkmode="isDarkMode"/>-->
      <CommentService />
    </template>
  </ParentLayout>
</template>
