import type { UseFetchOptions } from "nuxt/app";

export function useApiFetch<T>(
  path: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  let headers: any = {};

  const access_token = useCookie("access-token");
  const refresh_token = useCookie("refresh-token");

  if (access_token.value) {
    headers["Authorization"] = `Beaver ${access_token}`;
  }

  if (refresh_token.value) {
    headers["refresh-token"] = refresh_token;
  }

  const url = process.env.API_URL || "http://localhost:8080";

  return useLazyFetch(url + path, {
    watch: false,
    lazy: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  });
}
