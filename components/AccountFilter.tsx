"use client";
import qs from "query-string";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

export default function AccountFilter() {
  const router = useRouter();
  const pathname = usePathname();

  const params = useSearchParams();
  const accountId = params.get("accountId") || "all";
  const from = params.get("from") || "";
  const to = params.get("to") || "";

  const { data: accounts, isLoading: isLoadingAccounts } = useGetAccounts();

  const onChange = (newVal: string) => {
    const query = {
      accountId: newVal,
      from,
      to,
    };
    if (newVal === "all") {
      query.accountId = "";
    }
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query,
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  };

  return (
    <Select
      value={accountId}
      onValueChange={onChange}
      disabled={isLoadingAccounts}
    >
      <SelectTrigger
        className="lg:w-auto w-full h-9 rounded-md px-3
    font-normal bg-white/10 hover:bg-white/20 hover:text-white
    border-none focus:ring-offset-0 focus:ring-transparent outline-none
    text-white focus:bg-white/30 transition"
      >
        <SelectValue placeholder="Select account" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All accounts</SelectItem>
        {accounts?.map((acc) => (
          <SelectItem key={acc.id} value={acc.id}>
            {acc.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
