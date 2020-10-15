import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { routes } from "@/router/index";
import search from "@/components/Search.vue";

describe("Inside the Search", () => {
  let searchWrapper;
//   let mockProps;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    searchWrapper = shallowMount(search, {
      localVue,
      router,
      propsData: {
        dogBreadName: 'affenpinscher'
      }
    });
    afterEach(() => {
      searchWrapper.destroy();
    });
  });
  it("is a Vue instance", () => {
    expect(searchWrapper.isVueInstance).toBeTruthy();
  });
  it('props dogBreadName contain affenpinscher',()=>{
    expect(searchWrapper.props().dogBreadName).toBe('affenpinscher')
  });
  it("renders the correct markup", () => {
    expect(searchWrapper.html()).toContain('<div class="Search">');
  });


});
