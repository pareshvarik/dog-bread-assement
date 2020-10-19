import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { routes } from "@/router/index";
import about from "@/views/About.vue";

describe("Inside the Search", () => {
  let aboutWrapper;
  let mockStore;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    aboutWrapper = shallowMount(about, {
      localVue,
      router,
    });
    afterEach(() => {
      aboutWrapper.destroy();
    });
  });
  it("is a Vue instance", () => {
    expect(aboutWrapper.isVueInstance).toBeTruthy();
  });
  //need to test the filter capitalize
});
