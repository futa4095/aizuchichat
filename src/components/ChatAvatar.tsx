type ChatAvatarProps = {
    isUser: boolean;
    name: string;
};

export const ChatAvatar = ({ isUser, name }: ChatAvatarProps) => {
    return (
        <div className="flex flex-col items-center">
            <div className={`w-8 h-8 ${isUser ? 'bg-blue-100' : 'bg-gray-200'} rounded-full flex items-center justify-center`}>
                {isUser ? '👤' : '🤔'}
            </div>
            <span className="text-xs text-gray-500 mt-1">{name}</span>
        </div>
    );
};

ChatAvatar.displayName = 'ChatAvatar';
