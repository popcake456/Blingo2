"use client";

import { DictionaryTittle } from "@/db/schema";

import { Card } from "./card";


type Props = {
    dictionary: typeof DictionaryTittle.$inferSelect[]; 
  };


export const ListDic = ({ dictionary}: Props) =>{
  return (
    <div className="pt-3 grid-cols-1 lg:grid-cols-[repeat(auto-fill,minmax(105px,1fr))] gap-1">
      {dictionary.map((dictionary)=> (
        <Card 
          key={dictionary.id}
          id={dictionary.id}
          title={dictionary.title}
          onClick={() => {}}

        />
      ))}
    </div>
  );
};