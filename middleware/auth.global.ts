export default defineNuxtRouteMiddleware(async (to) => {
  if (to.fullPath === "/" || to.fullPath === "/login") {
    return;
  }

  const { data, error } = await useApiFetch("/validate");

  if (error.value?.statusCode) {
    return navigateTo("/login");
  }

  useCookie("access-token").value = data.value?.access_token;
});
