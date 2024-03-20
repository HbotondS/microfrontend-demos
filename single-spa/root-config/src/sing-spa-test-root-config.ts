import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@sing-spa-test/mfa1",
  app: () =>
    System.import<LifeCycles>("http://localhost:8080/sing-spa-test-mfa1.js"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
