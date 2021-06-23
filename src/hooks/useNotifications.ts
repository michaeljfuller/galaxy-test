import {useStoreSelector} from "./useStore";

export default function useNotifications() {
    return useStoreSelector(state => state.notifications);
}
