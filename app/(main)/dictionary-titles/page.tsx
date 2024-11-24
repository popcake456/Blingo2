"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

const dictionaryEntries = [
  { id: 1, title: "mapteng ja agsafa", description: "A phrase used to greet someone in the morning." },
{ id: 2, title: "te ngarud", description: "A word used to bid someone goodbye." },
{ id: 3, title: "nu pinsak", description: "A phrase used to indicate seeing someone again in the future." },

{ id: 4, title: "Sikak", description: "Refers to oneself; it means 'I' or 'me' in Ibaloi." },
{ id: 5, title: "Sikam", description: "Used to refer to the person being addressed; it means 'you' in Ibaloi." },
{ id: 6, title: "Sikato", description: "Refers to a third person; it means 'he' or 'she' in Ibaloi." },
{ id: 7, title: "sikateju", description: "Refers to a group, meaning 'we' in Ibaloi." },
{ id: 8, title: "Sikara", description: "Refers to multiple people; it means 'they' in Ibaloi." },

{ id: 9, title: "ngento?", description: "A question word used to ask 'what?' in Ibaloi." },
{ id: 10, title: "tuey?", description: "A question word used to ask 'where?' in Ibaloi." },
{ id: 11, title: "pigan?", description: "A question word used to ask 'when?' in Ibaloi." },
{ id: 12, title: "ngentoy?/nagu?", description: "A question word used to ask 'why?' in Ibaloi." },
{ id: 13, title: "Sifa", description: "A question word used to ask 'who?' in Ibaloi." },

{ id: 14, title: "dimaw", description: "A verb that means 'to go' in Ibaloi." },
{ id: 15, title: "dimaw ali", description: "A verb that means 'to come here' in Ibaloi." },
{ id: 16, title: "Engan", description: "A verb that means 'to eat' in Ibaloi." },
{ id: 17, title: "anginum", description: "A verb that means 'to drink' in Ibaloi." },
{ id: 18, title: "essel", description: "A verb that means 'to speak' in Ibaloi." },

{ id: 19, title: "Badeg", description: "An adjective that describes something big or large in size." },
{ id: 20, title: "Utek", description: "An adjective that describes something small or tiny." },
{ id: 21, title: "Petang", description: "An adjective that describes something hot or warm." },
{ id: 22, title: "angkitet", description: "An adjective that describes something cold or cool." },
{ id: 23, title: "edaing/matekal/siged", description: "Words that describe someone who is good or skilled." },
{ id: 24, title: "edangkaw", description: "An adjective used to describe someone tall." },
{ id: 25, title: "ekapsot", description: "An adjective that means weak or lacking strength." },
{ id: 26, title: "bakol/naama", description: "Words to describe someone who is old, either a male or female." },
{ id: 27, title: "Nga nga", description: "A word that means young, typically used for children." },
{ id: 28, title: "Pegsa/mahedsang", description: "Words to describe someone who is strong or powerful." },
{ id: 29, title: "Ambel at", description: "An adjective that means heavy or difficult to carry." },
{ id: 30, title: "anka-jas", description: "An adjective that means light or easy to carry." },
{ id: 31, title: "anshuhiyang/anshuhey", description: "Words to describe something long in length." },
{ id: 32, title: "antehey", description: "A word to describe something short in length." },
{ id: 33, title: "Man biyeng", description: "An adjective that describes someone or something fast." },

{ id: 34, title: "ambalenga", description: "A word that refers to the color red in Ibaloi." },
{ id: 35, title: "amputi", description: "A word that refers to the color white in Ibaloi." },
{ id: 36, title: "etuling", description: "A word that refers to the color black in Ibaloi." },

{ id: 37, title: "Nanang", description: "A term used to refer to one's mother." },
{ id: 38, title: "Tatang", description: "A term used to refer to one's father." },
{ id: 39, title: "agi ja dahi", description: "A phrase used to refer to a brother." },
{ id: 40, title: "agin bi-i", description: "A phrase used to refer to a sister." },

{ id: 41, title: "iman ko", description: "A phrase meaning 'mine' or something belonging to oneself." },
{ id: 42, title: "iman mo", description: "A phrase meaning 'yours' or something belonging to someone else." },
{ id: 43, title: "iman to", description: "A phrase meaning 'his' or 'hers,' denoting possession." },
{ id: 44, title: "iman sha", description: "A phrase meaning 'theirs,' indicating group possession." },
{ id: 45, title: "iman tayu", description: "A phrase meaning 'ours,' referring to collective possession." },

{ id: 46, title: "Bekkas", description: "A term that refers to rice, either uncooked or cooked." },
{ id: 47, title: "Shanom", description: "A word for water, the essential drink." },
{ id: 48, title: "afag", description: "A word that refers to meat or flesh." },
{ id: 49, title: "natteng/bulbulong", description: "Words that refer to vegetables or leafy greens." },
{ id: 50, title: "Balat", description: "A word that refers to a banana fruit." },
{ id: 51, title: "Mangka", description: "A word that refers to a mango fruit." },
];

const CORRECT_PASSCODE = "1234"; // Replace with your desired passcode

export default function DictionaryPage() {
  // State for passcode unlocking
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passcode, setPasscode] = useState("");

  // State for dictionary entries
  const [expandedEntry, setExpandedEntry] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggle = (id: number) => {
    setExpandedEntry(expandedEntry === id ? null : id); // Toggle the expanded state
  };

  const handleUnlock = () => {
    if (passcode === CORRECT_PASSCODE) {
      setIsUnlocked(true);
    } else {
      alert("Mali,Pakiusap ilagay ang tamang sagot");
    }
  };

  const filteredEntries = dictionaryEntries.filter((entry) =>
    entry.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      {!isUnlocked ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold mb-4">Huling Natutunan sa Ibaloi</h1>
          <input
            type="password"
            placeholder="Ilagay ang tamang sagot"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button
            variant="primary"
            size="default"
            className="mt-4"
            onClick={handleUnlock}
          >
            Unlock
          </Button>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Dictionary</h1>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <ul className="space-y-4">
            {filteredEntries.map((entry) => (
              <li key={entry.id} className="flex flex-col">
                <div className="flex w-full items-center gap-x-4 border-t-2 p-4 pt-8">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleToggle(entry.id)}
                  >
                    {entry.title}
                  </Button>
                </div>
                {expandedEntry === entry.id && (
                  <p className="mt-2 text-gray-700">{entry.description}</p>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}