import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

export const useUserStore = create (
    persist ( (set) => ({
        user: null,
        setUser: (userData) => set({user: userData}),
        clearUser: () => set({user:null}),
    }), {
        name: 'pqrs-storage',
        storage: createJSONStorage(() => sessionStorage),
    })
);