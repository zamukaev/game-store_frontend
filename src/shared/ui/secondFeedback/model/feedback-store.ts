import { create } from "zustand";

type Feedback = {
    virtues: string;
    defects: string;
    commentary: string;
};

type FeedbackStore = {
    feedback: Feedback;
    setFeedback: (key: keyof Feedback, value: any) => void;
};

const feedbackStore = create<FeedbackStore>((set) => ({
    feedback: {
        virtues: "",
        defects: "",
        commentary: "",
    },
    setFeedback: (key: keyof Feedback, value: any) =>
        set((state) => ({
            ...state,
            feedback: {
                ...state.feedback,
                [key]: value,
            },
        })),
}));

export default feedbackStore;
