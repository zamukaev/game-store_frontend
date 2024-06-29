import { create } from "zustand";

interface RatingState {
    currentStage: number;
    setCurrentStage: (newSteps: number) => void;
    rating: number;
    setRating: (rating: number) => void;
}

const useRatingStore = create<RatingState>((set) => ({
    currentStage: 1,
    setCurrentStage: (newStage) => set({ currentStage: newStage }),
    rating: 0,
    setRating: (rating) => set({ rating }),
}));

export default useRatingStore;
