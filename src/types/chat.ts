export type Message = {
    text: string;
    isUser: boolean;
};

export const AIZUCHI_RESPONSES = [
    "なるほど！",
    "へぇ～",
    "そうなんですね",
    "確かに！",
    "わかります！",
    "すごいですね！",
    "そうですよね～",
    "興味深いですね",
    "それで？",
    "まさに！",
] as const;
