"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { formUrlQuery } from "@/lib/utils";

type PaginationProps = {
  totalPages: number;
  page?: number | string;
  urlParamName?: string;
};
const Pagination = ({ page, totalPages, urlParamName }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClick = (btnType: string) => {
    const pageValue = btnType === "next" ? Number(page) + 1 : Number(page) - 1;
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamName || "page",
      value: pageValue.toString(),
    });
    router.push(newUrl, { scroll: false });
  };
  return (
    <div className="flex gap-2">
      <Button
        size="lg"
        className="w-28"
        variant="outline"
        disabled={Number(page) <= 1}
        onClick={() => onClick("prev")}
      >
        Prev
      </Button>
      <Button
        size="lg"
        className="w-28"
        variant="outline"
        disabled={Number(page) >= totalPages}
        onClick={() => onClick("next")}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
