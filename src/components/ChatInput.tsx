type ChatInputProps = {
    inputText: string;
    onInputChange: (text: string) => void;
    onSubmit: (text: string) => void;
};

export const ChatInput = ({ inputText, onInputChange, onSubmit }: ChatInputProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(inputText);
    };

    return (
        <form 
            onSubmit={handleSubmit}
            className="p-4 border-t border-gray-200 flex gap-2"
        >
            <input
                type="text"
                value={inputText}
                onChange={(e) => onInputChange(e.target.value)}
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
    );
};
