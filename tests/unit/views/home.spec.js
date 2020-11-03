import { shallowMount, createLocalVue } from "@vue/test-utils";
import home from "@/views/Home.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
import { routes } from "@/router/index";

describe("In PageNotFound Component", () => {
  let homeWrapper;
  const router = new VueRouter({ routes });
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    homeWrapper = shallowMount(home, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    homeWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(homeWrapper.isVueInstance).toBeTruthy();
  });
  
  // it('the search button',async()=>{
  //   homeWrapper.setData({
  //     dogBreed:['breedName: "Paresh", breedImage: "gggggg" ']
  //   })
  //   const button = homeWrapper.find('b-button');
  //   console.log(homeWrapper.html());
  //   await button.trigger('click');
  //   expect(homeWrapper.vm.searchData).toBeCalled();
  // })
  // it('hhhh',()=>{
  //   homeWrapper.vm.searchData("Paresh");
  //   expect(homeWrapper.vm.searchDogName).toHaveBeenCalledWith("Paresh")
  // })
  
});
