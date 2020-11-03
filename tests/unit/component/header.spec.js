import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import header from "@/components/Header.vue";
import { routes } from "@/router/index";

describe("In Footer Component", () => {
  let headerWrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    headerWrapper = shallowMount(header, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    headerWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(headerWrapper.isVueInstance).toBeTruthy();
  });

  it('it renders the <b-navbar-stub tag="nav" type="dark" variant="info" toggleable="lg"> ', () => {
    const expected =
      '<b-navbar-stub tag="nav" type="dark" variant="info" toggleable="lg">';
    expect(headerWrapper.html()).toContain(expected);
  });
  it("it renders the correct markup", () => {
    const expected = "<search-stub></search-stub>";
    expect(headerWrapper.html()).toContain(expected);
  });

  it('it should have a b-container-stub element with class="header"', () => {
    expect(headerWrapper.attributes("class")).toBe("header");
  });
});
