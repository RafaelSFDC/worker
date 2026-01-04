export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (
      url.pathname.startsWith("/v1") ||
      url.pathname.startsWith("/console")
    ) {
      url.hostname = "api.kataly.com.br";
    } else {
      url.hostname = "kataly.com.br";
    }

    return fetch(url, request);
  }
};
