import {TypedUseSelectorHook, useSelector, useDispatch} from "react-redux";
import type {RootState, AppDispatch} from "../store";

/** Typed version of react-redux's useSelector() */
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;

/** Typed version of react-redux's useDispatch() */
export const useStoreDispatch = () => useDispatch<AppDispatch>();
