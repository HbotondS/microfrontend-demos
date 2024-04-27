import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@sing-spa-test/header",
  app: () =>
    System.import<LifeCycles>("http://localhost:8081/sing-spa-test-header.js"),
  activeWhen: ["/"],
});

// this is used when you want to activate a microfrontend on a specific path, and only that microfrontend
registerApplication({
  name: "@sing-spa-test/counter",
  app: () =>
    System.import<LifeCycles>("http://localhost:8080/sing-spa-test-counter.js"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
