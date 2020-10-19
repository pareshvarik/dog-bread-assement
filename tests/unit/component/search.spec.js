import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { routes } from "@/router/index";
import search from "@/components/Search.vue";

describe("Inside the Search", () => {
  let searchWrapper;
  let mockStore;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    localVue.use(Vuex);
    mockStore = {
      state: {
        dogBreedObject: {},
        dogBreedList: [],
      },
      dispatch: jest.fn(),
    };
    searchWrapper = shallowMount(search, {
      localVue,
      router,
      mocks: {
        $store: mockStore,
      },
    });
    afterEach(() => {
      searchWrapper.destroy();
    });
  });
  it("is a Vue instance", () => {
    expect(searchWrapper.isVueInstance).toBeTruthy();
  });
  it("renders the correct markup", () => {
    expect(searchWrapper.html()).toContain('<div class="Search">');
  });
  it("check select is present or not", () => {
    console.log(mockStore);
    expect(searchWrapper.find("select").exists()).toBe(true);
  });
  // it("checks watcher called routes", () => {
  //   searchWrapper.setData({ searchData: 'bulldog' })
  //   searchWrapper.vm.$options.watch.searchData.call();
  //   expect(searchWrapper.vm.subBreed).toStrictEqual([])

  // });
  // it("checks dropdown will trigger or not", () => {
  //   expect(wrapper.vm.searchData).toBe('');
  //   let searchInput = wrapper.find("select");
  //   searchInput.trigger('change');
  //   expect(wrapper.vm.searchData).not.toBe('');
  // })

  // it("checks dropdown value", () => {
  //   console.log(wrapper.findAll('select#dogs').length);
  //   wrapper.findAll('select#dogs > option').at(1).element.selected=true;
  //   wrapper.find('select#dogs').trigger('change');
  //   expect(wrapper.vm.searchData).toEqual('pug');
  // })
});
