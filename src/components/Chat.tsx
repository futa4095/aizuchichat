'use client';

import { useEffect, useRef } from 'react';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { useChat } from '../hooks/useChat';

export default function Chat() {
    const { messages, inputText, setInputText, sendMessage } = useChat();
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="w-full max-w-2xl h-[80vh] bg-white rounded-lg shadow-lg flex flex-col mx-auto">
            <MessageList ref={chatContainerRef} messages={messages} />
            <ChatInput
                inputText={inputText}
                onInputChange={setInputText}
                onSubmit={sendMessage}
            />
        </div>
    );
}
