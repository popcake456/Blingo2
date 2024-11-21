import { FeedWrapper } from "@/components/feed-wrapper";

import { Header } from "./header";

const DictionaryPage = () => {
    return (
      <div className="flex flex-row-reverse gap-[48px] px-6">
      
        <FeedWrapper>
            <Header title="Talahulugan"/>
        </FeedWrapper>
      </div>
    );
  };
  
  export default DictionaryPage;