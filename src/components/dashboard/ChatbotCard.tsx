
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Bot } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

const ChatbotCard = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hi there! I'm your NutriQuest AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Based on your gut microbiome, I recommend increasing fiber intake from diverse plant sources.",
        "Your recent sleep data shows improvement! Keep maintaining a consistent sleep schedule.",
        "I notice you've been eating fewer fermented foods this week. Try adding yogurt or kimchi to boost your gut diversity.",
        "You're making great progress on your hydration goals. Keep it up!",
      ];
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg">
          <Bot className="h-5 w-5 mr-2 text-nq-purple-500" />
          NutriQuest Assistant
          <Badge variant="outline" className="ml-auto bg-nq-green-100 text-nq-green-700 border-nq-green-200">
            AI Powered
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col overflow-hidden">
        <div className="flex-grow overflow-y-auto mb-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-[80%] ${
                  message.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {message.sender === "bot" && (
                  <Avatar className="h-8 w-8 mr-2 flex-shrink-0">
                    <AvatarFallback className="bg-nq-purple-100 text-nq-purple-700">AI</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`px-3 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-nq-purple-500 text-white ml-2"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs text-right mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                {message.sender === "user" && (
                  <Avatar className="h-8 w-8 ml-2 flex-shrink-0">
                    <AvatarImage src="https://i.pravatar.cc/300" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <Input
            placeholder="Ask about your nutrition, gut health, or metrics..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-grow"
          />
          <Button onClick={handleSendMessage} className="bg-nq-purple-500 hover:bg-nq-purple-600">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatbotCard;
