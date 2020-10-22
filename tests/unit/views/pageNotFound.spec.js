import { shallowMount, createLocalVue } from "@vue/test-utils";
import pagenotfound from "@/views/PageNotFound.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";

import router from "@/router";

// import { routes } from "@/router/index";

describe("In PageNotFound Component", () => {
  let pagenotfoundWrapper;
  // const router = new VueRouter();
  // const router = new VueRouter({ routes });
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    pagenotfoundWrapper = shallowMount(pagenotfound, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    pagenotfoundWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(pagenotfoundWrapper.isVueInstance).toBeTruthy();
  });
  // it("is calling method", () => {
  //   const goHome = jest.fn();
  //   pagenotfoundWrapper.setMethods({
  //     goHome: goHome,
  //   });
  //   pagenotfoundWrapper.find("button").trigger("click");
  //   expect(goHome).toHaveBeenCalled();
  // });
  it("it renders the correct markup", () => {
    const expected = '<div class="jumbotron">';
    expect(pagenotfoundWrapper.html()).toContain(expected);
  });
  // it('has routes to home page',async ()=>{
  //   const button = pagenotfoundWrapper.find('#goHome');
  //   await button.trigger('click');
  //   expect(pagenotfoundWrapper.vm.$route.path).toBe("/");

  // })
  it("has called goHome function", () => {
    const goHome = jest.fn();
    pagenotfoundWrapper.setMethods({
      goHome: goHome,
    });
    pagenotfoundWrapper.find("button").trigger("click");
    expect(goHome).toHaveBeenCalled();
  });

  it("should check if it go to home page", async () => {
    const $route = {
      name: "Home",
    };
    expect(pagenotfoundWrapper.vm.$route.name).toBe($route.name);
  });

  // it("test the goHome",()=>{
  //   const push = jest.fn();
  //   const $router = {
  //   push: jest.fn(),
  //   };
  //   mocks: {
  //   $route,
  //   $router
  //   };
  //   expect(push).toHaveBeenCalledWith('/the-desired-path');

  // })
});
