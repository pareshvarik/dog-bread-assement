import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { routes } from "@/router/index";
import about from "@/views/About.vue";
import {capitalize} from "@/filters/wordCapitalize.js"
describe("Inside the Search", () => {
  let aboutWrapper;
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
  //goHome
  it("has called goHome function", () => {
    const goHome = jest.fn();
    aboutWrapper.setMethods({
      goHome: goHome,
    });
    aboutWrapper.find("button").trigger("click");
    expect(goHome).toHaveBeenCalled();
  });

  // it("should check if it go to home page", async () => {
  //   const $route = {
  //     name: "Home",
  //   };
  //   expect(aboutWrapper.vm.$route.name).toBe($route.name);
  // });
  it('has routes to home page',async ()=>{
      const button = aboutWrapper.find('#goHome');
      await button.trigger('click');
      expect(aboutWrapper.vm.$route.path).toBe("/");
    })
    it("has make capitalize using filter",()=>{
      expect(capitalize("actual")).toEqual("Actual")

    }) 
    
});
