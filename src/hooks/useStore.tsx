import { Profile } from "@/types/Profile";
import { createStore } from "zustand/vanilla";

export type ProfileStore = {
    currentProfile: Profile | null;
    setCurrentProfile: (profile: Profile) => void;
};



export const createCurrentProfileStore = (
    initState: ProfileStore = {
        currentProfile: null,
        setCurrentProfile: () => { }
    }
) => {
    return createStore<ProfileStore>()((set) => ({
        ...initState,
        setCurrentProfile: (profile) => set({ currentProfile: profile })
    }))
};
