import { shallowMount, createLocalVue } from "@vue/test-utils";
import home from "@/views/Home.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueRouter from 'vue-router';
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
        router
      });
    });
  
    afterEach(() => {
      homeWrapper.destroy();
    });
    it("is a Vue instance", () => {
      expect(homeWrapper.isVueInstance).toBeTruthy();
    });
    it('it renders the <b-navbar-stub tag="nav" type="dark" variant="info" toggleable="lg"> ', () => {
        const expected = '<b-navbar-stub tag="nav" type="dark" variant="info" toggleable="lg">';
        expect(homeWrapper.html()).toContain(expected);
      });
      it('it renders the correct markup', () => {
        const expected = '<search-stub></search-stub>';
        expect(homeWrapper.html()).toContain(expected);
      });
      

    
});