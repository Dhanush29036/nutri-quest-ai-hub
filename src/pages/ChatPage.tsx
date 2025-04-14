
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bot, User, Send, Wand, ChevronDown, Plus, FileText, Sparkles } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

const ChatPage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "👋 Welcome to NutriQuest AI Assistant! I'm here to help with your nutrition and gut health questions. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const botResponses = [
    "Based on your gut microbiome analysis, I recommend increasing your intake of fermented foods like kimchi, sauerkraut, and kefir to boost your Lactobacillus levels.",
    "I've analyzed your recent wearable data. Your sleep patterns show improvement, but your heart rate variability could be better. This might be linked to stress or inflammation - consider adding more omega-3 rich foods like fatty fish to your diet.",
    "Looking at your meal logs, I notice you've been consuming less fiber than recommended. Try incorporating more diverse plant foods - aim for 30 different plant species each week to support gut diversity.",
    "Your Bacteroides levels from your gut test are lower than ideal. These bacteria help with complex carbohydrate digestion. Try adding more whole grains and resistant starches to your diet.",
    "I've noticed you've been very consistent with logging your meals this week. Great job maintaining your streak! You've earned 50 bonus coins for this achievement.",
    "Based on your activity patterns this week, your body might need more electrolytes. Consider adding mineral-rich foods like leafy greens and a pinch of sea salt to your pre-workout smoothie."
  ];
  
  const suggestionPrompts = [
    "What foods should I eat to improve my gut diversity?",
    "How can I reduce inflammation based on my microbiome?",
    "Explain my recent sleep patterns and how they affect my gut",
    "Generate a meal plan for boosting Bifidobacterium",
    "Why did my heart rate variability change this week?",
    "What are my top micronutrient deficiencies?"
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <h1 className="text-3xl font-bold mb-1">AI Assistant</h1>
      <p className="text-muted-foreground mb-4">Get personalized nutrition and health insights</p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-4 flex-1">
        <Card className="md:col-span-3 flex flex-col">
          <CardHeader className="pb-2 border-b">
            <CardTitle className="flex items-center text-lg">
              <Bot className="h-5 w-5 mr-2 text-nq-purple-500" />
              NutriQuest AI
              <Badge variant="outline" className="ml-auto bg-nq-green-100 text-nq-green-700 border-nq-green-200">
                Powered by Advanced AI
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-grow overflow-hidden flex flex-col">
            <ScrollArea className="flex-grow p-4">
              <div className="space-y-4">
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
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarFallback className="bg-nq-purple-100 text-nq-purple-700">
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`px-4 py-3 rounded-lg ${
                          message.sender === "user"
                            ? "bg-nq-purple-500 text-white"
                            : "bg-muted"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                        <p className="text-xs mt-1 opacity-70 text-right">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      {message.sender === "user" && (
                        <Avatar className="h-8 w-8 ml-2">
                          <AvatarImage src="https://i.pravatar.cc/300" alt="User" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask anything about your nutrition, health data, or gut microbiome..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-grow"
                />
                <Button 
                  onClick={handleSendMessage} 
                  className="bg-nq-purple-500 hover:bg-nq-purple-600"
                  disabled={input.trim() === ""}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {suggestionPrompts.slice(0, 3).map((prompt, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs bg-muted/50"
                    onClick={() => handleSuggestionClick(prompt)}
                  >
                    {prompt}
                  </Button>
                ))}
                <Button variant="outline" size="sm" className="text-xs bg-muted/50">
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Wand className="h-4 w-4 mr-2" /> Analyze My Diet
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" /> Generate Meal Plan
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Sparkles className="h-4 w-4 mr-2" /> Interpret Gut Test
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" /> New Tool
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Recent Topics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm p-2 rounded-lg bg-muted hover:bg-muted/70 cursor-pointer">
                <div className="font-medium">Gut Health Analysis</div>
                <div className="text-xs text-muted-foreground">2 days ago</div>
              </div>
              <div className="text-sm p-2 rounded-lg bg-muted hover:bg-muted/70 cursor-pointer">
                <div className="font-medium">Sleep Pattern Review</div>
                <div className="text-xs text-muted-foreground">4 days ago</div>
              </div>
              <div className="text-sm p-2 rounded-lg bg-muted hover:bg-muted/70 cursor-pointer">
                <div className="font-medium">Anti-Inflammatory Diet</div>
                <div className="text-xs text-muted-foreground">1 week ago</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
