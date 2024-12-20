import { useState } from 'react';

// Dynamically import all cards from the assets/cards directory
const cardImages = import.meta.glob('../assets/cards/*.png', { eager: true });

const Dashboard = () => {
    const [currentCard, setCurrentCard] = useState<string | null>(null);

    const handleDrawCard = () => {
        const cardPaths = Object.values(cardImages).map(
            (card) => (card as { default: string }).default
        );
        const randomIndex = Math.floor(Math.random() * cardPaths.length);
        setCurrentCard(cardPaths[randomIndex]);
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold text-blue-300 mb-6">Dashboard</h1>
            <button
                onClick={handleDrawCard}
                className="px-6 py-2 bg-blue-500 rounded hover:bg-blue-600 transition text-white font-semibold"
            >
                Draw a Card
            </button>
            <div className="mt-6">
                {currentCard ? (
                    <img
                        src={currentCard}
                        alt="Playing Card"
                        className="w-64 h-96 object-contain rounded shadow-lg"
                    />
                ) : (
                    <p className="text-gray-400">Click the button to draw a card!</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
