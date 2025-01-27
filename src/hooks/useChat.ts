import { useState } from 'react';
import { Message, AIZUCHI_RESPONSES } from '../types/chat';

export const useChat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState("");

    const getRandomAizuchi = () => {
        const randomIndex = Math.floor(Math.random() * AIZUCHI_RESPONSES.length);
        return AIZUCHI_RESPONSES[randomIndex];
    };

    const sendMessage = (text: string) => {
        if (!text.trim()) return;

        // ユーザーのメッセージを追加
        setMessages(prev => [...prev, { text, isUser: true }]);
        setInputText("");

        // ボットの返信を遅延させる
        setTimeout(() => {
            const response = getRandomAizuchi();
            setMessages(prev => [...prev, { text: response, isUser: false }]);
        }, 1000);
    };

    return {
        messages,
        inputText,
        setInputText,
        sendMessage,
    };
};
