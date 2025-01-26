'use client';

import { useState, useEffect, useRef } from 'react';

const AIZUCHI_RESPONSES = [
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
];

export default function Chat() {
    const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
    const [inputText, setInputText] = useState("");
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const getRandomAizuchi = () => {
        const randomIndex = Math.floor(Math.random() * AIZUCHI_RESPONSES.length);
        return AIZUCHI_RESPONSES[randomIndex];
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        // ユーザーのメッセージを追加
        setMessages(prev => [...prev, { text: inputText, isUser: true }]);
        setInputText("");

        // ボットの返信を遅延させる
        setTimeout(() => {
            const response = getRandomAizuchi();
            setMessages(prev => [...prev, { text: response, isUser: false }]);
        }, 1000);
    };

    return (
        <div className="w-full max-w-2xl h-[80vh] bg-white rounded-lg shadow-lg flex flex-col mx-auto">
            <div 
                ref={chatContainerRef}
                className="flex-grow overflow-y-auto p-4 space-y-4"
            >
                {messages.map((message, index) => (
                    <div 
                        key={index} 
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                        <div 
                            className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                                message.isUser 
                                    ? 'bg-blue-500 text-white' 
                                    : 'bg-gray-100 text-gray-800'
                            }`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
            <form 
                onSubmit={handleSubmit}
                className="p-4 border-t border-gray-200 flex gap-2"
            >
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="メッセージを入力..."
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                >
                    送信
                </button>
            </form>
        </div>
    );
}
