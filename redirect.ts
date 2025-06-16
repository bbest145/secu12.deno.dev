// redirect.ts

const redirectUrl = "http://srv235374.hoster-test.ru/roguecu";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
