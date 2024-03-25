import { registerApplication, start, LifeCycles } from "single-spa";

// this is used when you want to activate a microfrontend on a specific path, and only that microfrontend
registerApplication({
  name: "@sing-spa-test/mfa1",
  app: () =>
    System.import<LifeCycles>("http://localhost:8080/sing-spa-test-mfa1.js"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
