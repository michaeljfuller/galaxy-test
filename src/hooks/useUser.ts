import {useStoreSelector} from "./useStore";

/**
 * Get the logged in user
 * @param {boolean} [expected=false] If false, the result can be undefined.
 */
export default function useUser<
    Expected extends true|false|undefined,
    Alternative = User|(Expected extends true ? never : undefined)
>(expected?: Expected): User|Alternative {
    return useStoreSelector(state => state.user.current) as User|Alternative;
}
