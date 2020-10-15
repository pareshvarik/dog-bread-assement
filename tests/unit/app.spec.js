import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import app from "@/App.vue";
import footer from "@/components/Footer.vue";
// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

// it("checks whether it is a vue instance",()=>{
//   const wrapper = shallowMount(Search);
//   expect(wrapper.isVueInstance()).toBeTruthy();
// })

describe("In App Component", () => {
  let appWrapper;
  const router = new VueRouter({ path: "/", name: "Home" });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    appWrapper = shallowMount(app, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    appWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });

  it("renders the correct markup", () => {
    expect(appWrapper.html()).toContain('<div id="app">');
  });

  it('it should have a div element with id="app"', () => {
    expect(appWrapper.attributes("id")).toBe("app");
  });
  //for router tag tesing
  it("it should have a <router-view-stub></router-view-stub>", () => {
    expect(appWrapper.html()).toContain("<router-view-stub name=\"default\"></router-view-stub>");
  });

  //for footer testing
  it("it should load the footer", () => {
    expect(footer).toBeTruthy();
  });

  it("it should have a <footer-stub></footer-stub>", () => {
    expect(appWrapper.html()).toContain("<footer-stub></footer-stub>");
  });

});

