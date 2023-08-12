<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['case'],
  setup(props, { slots }) {
    return () => {
      if (slots[props.case]) {
        return slots[props.case] && slots[props.case]();
      }
      if (slots['default']) {
        return slots['default']();
      }
    };
  },
});
</script>