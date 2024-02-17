import type StateZ from "statez";
import { useStateZ } from "useStateZ";

export function useZyph(appId: string) {
  const id = appId;
  const uid = `__zsdk_${id}__`;
  //@ts-ignore
  const $state = window[uid] as StateZ;
  function prop(name: string) {
    return useStateZ(name, uid);
  }

  return {
    id,
    prop,
    props: $state.value,
  };
}