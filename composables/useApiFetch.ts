import type { UseFetchOptions } from "nuxt/app";

export function useApiFetch<T>(
  path: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  let headers: any = {};

  const access_token = useCookie("access-token").value?.toString();
  const refresh_token = useCookie("refresh-token").value?.toString();

  if (access_token) {
    headers["Authorization"] = `Beaver ${access_token}`;
  }

  if (refresh_token) {
    headers["refresh-token"] = refresh_token;
  }

  const url = process.env.API_URL || "http://localhost:8080";

  return useFetch(url + path, {
    server: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  });
}
