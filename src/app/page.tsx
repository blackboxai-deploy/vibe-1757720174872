"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Greeting {
  value: string;
  label: string;
  text: string;
  flag: string;
  language: string;
}

const greetings: Greeting[] = [
  { 
    value: "hello-world", 
    label: "Hello World! (English)", 
    text: "Hello World!", 
    flag: "🇺🇸",
    language: "English"
  },
  { 
    value: "hola-mundo", 
    label: "¡Hola Mundo! (Spanish)", 
    text: "¡Hola Mundo!", 
    flag: "🇪🇸",
    language: "Español"
  },
  { 
    value: "bonjour-monde", 
    label: "Bonjour le Monde! (French)", 
    text: "Bonjour le Monde!", 
    flag: "🇫🇷",
    language: "Français"
  },
  { 
    value: "hallo-welt", 
    label: "Hallo Welt! (German)", 
    text: "Hallo Welt!", 
    flag: "🇩🇪",
    language: "Deutsch"
  },
  { 
    value: "ciao-mondo", 
    label: "Ciao Mondo! (Italian)", 
    text: "Ciao Mondo!", 
    flag: "🇮🇹",
    language: "Italiano"
  },
  { 
    value: "konnichiwa-sekai", 
    label: "こんにちは世界! (Japanese)", 
    text: "こんにちは世界!", 
    flag: "🇯🇵",
    language: "日本語"
  },
  { 
    value: "ni-hao-shi-jie", 
    label: "你好世界! (Chinese)", 
    text: "你好世界!", 
    flag: "🇨🇳",
    language: "中文"
  },
  { 
    value: "namaste-duniya", 
    label: "नमस्ते दुनिया! (Hindi)", 
    text: "नमस्ते दुनिया!", 
    flag: "🇮🇳",
    language: "हिंदी"
  },
];

export default function Home() {
  const [selectedGreeting, setSelectedGreeting] = useState<Greeting>(greetings[0]);

  const handleSelectionChange = (value: string) => {
    const greeting = greetings.find(g => g.value === value);
    if (greeting) {
      setSelectedGreeting(greeting);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full mx-auto">
        <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 md:p-12">
          
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
              <span className="text-3xl">🌍</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
              Global Greetings
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover how to say "Hello World" in different languages around the globe. 
              Choose a language from the dropdown to see the greeting change dynamically!
            </p>
          </div>

          {/* Select Component Section */}
          <div className="mb-12 flex flex-col items-center">
            <div className="w-full max-w-md mb-6">
              <label htmlFor="greeting-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 text-center">
                Choose Your Language
              </label>
              <Select
                value={selectedGreeting.value}
                onValueChange={handleSelectionChange}
              >
                <SelectTrigger 
                  id="greeting-select"
                  className="w-full text-base h-12 text-center shadow-md hover:shadow-lg transition-shadow border-2 focus:border-blue-500"
                >
                  <SelectValue placeholder="Select a greeting..." />
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  {greetings.map((greeting) => (
                    <SelectItem 
                      key={greeting.value} 
                      value={greeting.value}
                      className="text-base py-3 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{greeting.flag}</span>
                        <span>{greeting.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Display Selected Greeting */}
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-2xl p-8 shadow-xl text-center max-w-2xl w-full">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-4">{selectedGreeting.flag}</span>
                <div className="text-left">
                  <p className="text-white/80 text-sm font-medium">{selectedGreeting.language}</p>
                  <h2 className="text-3xl md:text-5xl font-bold text-white">
                    {selectedGreeting.text}
                  </h2>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/90 text-lg font-medium">
                  Welcome to our multilingual Hello World application!
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 text-lg">Interactive Select</h3>
              <p className="text-blue-700 dark:text-blue-400 text-sm leading-relaxed">
                Powered by shadcn/ui Select component with smooth animations
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200/50 dark:border-purple-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <span className="text-white text-xl">🌐</span>
              </div>
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2 text-lg">8 Languages</h3>
              <p className="text-purple-700 dark:text-purple-400 text-sm leading-relaxed">
                Greetings from around the world with native scripts
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200/50 dark:border-green-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2 text-lg">Responsive</h3>
              <p className="text-green-700 dark:text-green-400 text-sm leading-relaxed">
                Optimized for desktop, tablet, and mobile devices
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 border border-orange-200/50 dark:border-orange-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <span className="text-white text-xl">♿</span>
              </div>
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2 text-lg">Accessible</h3>
              <p className="text-orange-700 dark:text-orange-400 text-sm leading-relaxed">
                Full keyboard navigation and screen reader support
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components
            </p>
            <div className="flex items-center justify-center mt-4 space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                Next.js 15
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                TypeScript
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                shadcn/ui
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}