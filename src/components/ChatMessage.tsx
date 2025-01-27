import { Message } from '../types/chat';
import { ChatAvatar } from './ChatAvatar';

type ChatMessageProps = {
    message: Message;
};

export const ChatMessage = ({ message }: ChatMessageProps) => {
    return (
        <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} items-start gap-2`}>
            {!message.isUser && <ChatAvatar isUser={false} name="相槌さん" />}
            <div className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                message.isUser 
                    ? 'bg-blue-500 text-white rounded-tr-none' 
                    : 'bg-gray-100 text-gray-800 rounded-tl-none'
            }`}>
                {message.text}
            </div>
            {message.isUser && <ChatAvatar isUser={true} name="あなた" />}
        </div>
    );
};

ChatMessage.displayName = 'ChatMessage';
