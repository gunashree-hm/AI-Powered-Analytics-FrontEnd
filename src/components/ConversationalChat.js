import React, { useState, useRef, useEffect } from 'react';

const SUGGESTIONS = [
    'Why did sales drop in Q3?',
    'Show revenue trend for 2024',
    'Compare product performance',
    'What are the top-selling categories?',
];

// Simulated AI responses with varying detail
const AI_RESPONSES = {
    default: `Based on the data analysis, here are the key findings:

**Sales Performance:** Overall revenue grew by 12.5% compared to the previous period. The highest performing category was Electronics with $2.4M in revenue.

**Key Trends:**
- Q1 showed steady growth across all categories
- Q3 experienced a dip due to seasonal effects and supply chain adjustments
- Online sales channel outperformed in-store by 34%

Would you like me to drill deeper into any specific area?`,

    sales: `**Q3 Sales Analysis:**

The sales decline in Q3 was primarily driven by three factors:

1. **Seasonal Adjustment** (-8.2%): Historical patterns show a consistent dip in July-September
2. **Supply Chain Disruption** (-4.1%): Key supplier delays impacted inventory for SKU-2847 and SKU-3921
3. **Competitive Pressure** (-2.3%): Two new market entrants captured approximately 6% market share

**Recommendation:** Consider pre-ordering high-demand SKUs 6 weeks earlier and running a targeted promotion in August to offset the seasonal dip.`,

    revenue: `**2024 Revenue Trend Analysis:**

Monthly revenue shows an upward trajectory:

- **Jan-Mar:** $1.2M avg/month (Baseline)
- **Apr-Jun:** $1.45M avg/month (+20.8%)
- **Jul-Sep:** $1.31M avg/month (-9.7% from Q2, +9.2% from Q1)
- **Oct-Dec:** $1.68M avg/month (Projected, +28.2% from Q2)

The strongest growth driver was the enterprise B2B segment, contributing 42% of total revenue growth.`,

    product: `**Product Performance Comparison:**

| Product Line | Revenue | Growth | Margin |
|---|---|---|---|
| Electronics | $2.4M | +18% | 24% |
| Software | $1.8M | +31% | 72% |
| Services | $1.1M | +7% | 45% |
| Hardware | $0.9M | -3% | 18% |

**Top Insight:** Software has the highest margin and fastest growth. Consider shifting marketing budget allocation by 15% toward software solutions.`,

    categories: `**Top-Selling Categories (Last 30 Days):**

1. **Enterprise Software** - $487K (22% of total)
2. **Cloud Services** - $412K (19%)
3. **Consumer Electronics** - $356K (16%)
4. **Data Analytics Tools** - $298K (14%)
5. **IoT Devices** - $234K (11%)

**Emerging Trend:** Data Analytics Tools grew 47% month-over-month, making it the fastest-growing category. This aligns with industry trends toward self-service BI tools.`,
};

function getAIResponse(question) {
    const q = question.toLowerCase();
    if (q.includes('sales') || q.includes('drop') || q.includes('q3')) return AI_RESPONSES.sales;
    if (q.includes('revenue') || q.includes('trend') || q.includes('2024')) return AI_RESPONSES.revenue;
    if (q.includes('product') || q.includes('compare') || q.includes('performance')) return AI_RESPONSES.product;
    if (q.includes('categor') || q.includes('top') || q.includes('selling')) return AI_RESPONSES.categories;
    return AI_RESPONSES.default;
}

function ConversationalChat() {
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content:
                "Welcome to NexusAI Analytics! I can help you analyze your data using natural language. Try asking questions like *\"Why did sales drop in Q3?\"* or *\"Show revenue trends for 2024\"*. What would you like to explore?",
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = (text) => {
        const question = text || input.trim();
        if (!question) return;

        // Add user message
        setMessages((prev) => [...prev, { role: 'user', content: question }]);
        setInput('');
        setIsTyping(true);

        // Simulate AI response delay
        setTimeout(() => {
            const response = getAIResponse(question);
            setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
            setIsTyping(false);
        }, 1200 + Math.random() * 800);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const formatContent = (content) => {
        // Simple markdown-like formatting
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br/>');
    };

    return (
        <div className="card full-width animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="card-header">
                <div className="card-header-left">
                    <div className="card-header-icon purple">
                        <i className="ri-chat-ai-line"></i>
                    </div>
                    <div>
                        <h3>Conversational Analytics</h3>
                        <p>Ask questions about your data in natural language</p>
                    </div>
                </div>
                <div className="card-header-actions">
                    <button className="btn btn-ghost btn-sm" id="clear-chat-btn">
                        <i className="ri-delete-bin-line"></i> Clear
                    </button>
                </div>
            </div>

            <div className="chat-container">
                <div className="chat-messages" id="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`chat-message ${msg.role}`}>
                            <div className="chat-message-avatar">
                                {msg.role === 'assistant' ? (
                                    <i className="ri-robot-2-line"></i>
                                ) : (
                                    'JD'
                                )}
                            </div>
                            <div
                                className="chat-message-content"
                                dangerouslySetInnerHTML={{ __html: formatContent(msg.content) }}
                            />
                        </div>
                    ))}

                    {isTyping && (
                        <div className="chat-message assistant">
                            <div className="chat-message-avatar">
                                <i className="ri-robot-2-line"></i>
                            </div>
                            <div className="chat-message-content">
                                <div className="typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="chat-suggestions">
                    {SUGGESTIONS.map((suggestion, index) => (
                        <button
                            key={index}
                            className="chat-suggestion-chip"
                            onClick={() => handleSend(suggestion)}
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>

                <div className="chat-input-area">
                    <div className="chat-input-wrapper">
                        <i className="ri-sparkling-2-line" style={{ color: 'var(--color-text-accent)' }}></i>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Ask anything about your data..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            id="chat-input"
                        />
                    </div>
                    <button
                        className="chat-send-btn"
                        onClick={() => handleSend()}
                        disabled={!input.trim() || isTyping}
                        id="chat-send-btn"
                    >
                        <i className="ri-send-plane-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConversationalChat;
