import { forwardRef } from 'react';
import { Message } from '../types/chat';
import { ChatMessage } from './ChatMessage';

type MessageListProps = {
    messages: Message[];
};

export const MessageList = forwardRef<HTMLDivElement, MessageListProps>(
    ({ messages }, ref) => {
        return (
            <div ref={ref} className="flex-grow overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <ChatMessage key={index} message={message} />
                ))}
            </div>
        );
    }
);

MessageList.displayName = 'MessageList';
