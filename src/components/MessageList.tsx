import { forwardRef } from 'react';
import { Message } from '../types/chat';

type MessageListProps = {
    messages: Message[];
};

export const MessageList = forwardRef<HTMLDivElement, MessageListProps>(
    ({ messages }, ref) => {
        return (
            <div 
                ref={ref}
                className="flex-grow overflow-y-auto p-4 space-y-4"
            >
                {messages.map((message, index) => (
                    <div 
                        key={index} 
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} items-start gap-2`}
                    >
                        {!message.isUser && (
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                    🤔
                                </div>
                                <span className="text-xs text-gray-500 mt-1">相槌さん</span>
                            </div>
                        )}
                        <div 
                            className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                                message.isUser 
                                    ? 'bg-blue-500 text-white rounded-tr-none' 
                                    : 'bg-gray-100 text-gray-800 rounded-tl-none'
                            }`}
                        >
                            {message.text}
                        </div>
                        {message.isUser && (
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    👤
                                </div>
                                <span className="text-xs text-gray-500 mt-1">あなた</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }
);

MessageList.displayName = 'MessageList';
