import { getDictionary } from "@/db/queries";

import { ListDic } from "./list";



const DictionaryTitPage = async () => {
    const dictionary = await getDictionary();

    return (
        <div className="mx-auto h-full max-w-[912px] px-3">
      <h1 className="text-2xl font-bold text-neutral-700">
        Talahulugan

      </h1>
      <ListDic 
        dictionary={dictionary}
      />
    </div>
  );
    
};
export default DictionaryTitPage;