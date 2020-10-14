import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import footer from '@/components/Footer.vue';
import { routes } from '@/router/index';

describe('In Footer Component', () => {
  let footerWrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    footerWrapper = shallowMount(footer, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    footerWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(footerWrapper.isVueInstance).toBeTruthy();
  });

  it('it renders the correct markup', () => {
    const expected = '<b-container-stub tag="div" fluid="true" class="footer">';
    expect(footerWrapper.html()).toContain(expected);
  });

  it('it should have a b-container-stub element with class="footer"', () => {
    expect(footerWrapper.attributes('class')).toBe('footer');
  });
});