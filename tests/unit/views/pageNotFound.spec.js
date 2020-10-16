import { shallowMount, createLocalVue } from "@vue/test-utils";
import pagenotfound from "@/views/PageNotFound.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueRouter from 'vue-router';
import { routes } from "@/router/index";

describe("In PageNotFound Component", () => {
  let pagenotfoundWrapper;
  const router = new VueRouter({ routes });
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    pagenotfoundWrapper = shallowMount(pagenotfound, {
      localVue,
      router
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
  it('it renders the correct markup', () => {
    const expected = '<div class="jumbotron">';
    expect(pagenotfoundWrapper.html()).toContain(expected);
  });
});
