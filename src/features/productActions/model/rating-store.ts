import { create } from "zustand";

type Feedback = {
    virtues: string;
    defects: string;
    commentary: string;
};

type RatingState = {
    currentStage: number;
    setCurrentStage: (newSteps: number) => void;
    rating: number;
    setRating: (rating: number) => void;
};

type CombinedStore = RatingState & {
    feedback: Feedback;
    setFeedback: (key: keyof Feedback, value: any) => void;
    experience: string;
    setExperienceCategory: (category: string) => void;
    clearFeedback: () => void;
};

const useRatingStore = create<CombinedStore>((set) => ({
    currentStage: 1,
    setCurrentStage: (newStage) => set((state) => ({ currentStage: newStage })),
    rating: 0,
    setRating: (rating) => set({ rating }),
    feedback: {
        virtues: "",
        defects: "",
        commentary: "",
    },
    setFeedback: (key, value) =>
        set((state) => ({
            feedback: {
                ...state.feedback,
                [key]: value,
            },
        })),
    clearFeedback: () =>
        set({ feedback: { virtues: "", defects: "", commentary: "" } }),

    experience: "",
    setExperienceCategory: (category) => set({ experience: category }),
}));

export default useRatingStore;
