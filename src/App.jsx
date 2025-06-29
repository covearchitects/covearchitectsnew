import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-red-600">COVE Architects</h1>
      </header>
      <main className="p-6">
        <p className="text-lg text-gray-700 mb-4">
          We handhold Societies through the entire journey of redevelopment right till you come back to your new home.
        </p>
        <Button>Let’s Discuss Your Society’s Future</Button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {["Mayfair CHS", "New Friends CHS", "Shivdham CHS"].map((name, i) => (
            <Card key={i}>
              <CardContent>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-gray-600">Under Construction</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}