import { atom } from "jotai";

export const StateLogin = atom<boolean>(false);

export const PerfilUser = atom<string>();

export const SidebarGestorSet = atom<boolean>(false);

export const OpenSidebarGestor = atom<boolean>(false);

export const RouterHomeLogoff = atom<boolean>(false);