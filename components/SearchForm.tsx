import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <Input
        name="query"
        defaultValue={query}
        className="search-input !border-none"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <Button type="submit" variant="ghost" 
        className="search-btn text-white">
          <Search className="size-5"/>
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
