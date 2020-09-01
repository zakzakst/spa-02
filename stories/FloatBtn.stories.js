import { storiesOf } from '@storybook/vue'
import FloatBtn from '@/components/FloatBtn';

// Story
storiesOf('COMPONENT/FloatBtn', module)
  .add('default', () => ({
    components: { FloatBtn },
    template: `<FloatBtn />`,
  }));
