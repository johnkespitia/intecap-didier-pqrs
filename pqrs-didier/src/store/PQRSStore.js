import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

export const usePQRSStore = create (
    persist ( (set) => ({
        requests: [],
        addRequest: (requestData) => set((state) => ({requests: [...state.requests, requestData]})),
        removeRequest: (requestId) => set((state) => ({requests: state.requests.filter(r => r.id !== requestId)})),
        updateRequest: (updatedRequest) => set((state) => {
           let currentRequestId = state.requests.findIndex(r => r.id === updatedRequest.id );
              if (currentRequestId !== -1) {   
                    state.requests[currentRequestId] = updatedRequest;
              }
              return {requests: [...state.requests]};
        }),
        clearRequests: () => set({requests:[]}),
    }), {
        name: 'pqrs-storage-requests',
        storage: createJSONStorage(() => sessionStorage),
    })
);