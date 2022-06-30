import { computed } from "vue";
import { PC_DEVICE_WIDTH } from "../constants";
import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();
/** 是否是移动设备，判断依据是屏幕宽度小于1280 */
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH;
});
