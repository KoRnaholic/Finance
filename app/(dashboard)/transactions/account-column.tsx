import { useOpenAccount } from "@/features/accounts/hooks/Use-open-account";

import { cn } from "@/lib/utils";

type Props = {
  account: string;
  accountId: string;
};
export default function AccountColumn({ account, accountId }: Props) {
  const { onOpen: onOpenAacount } = useOpenAccount();

  const onClick = () => {
    onOpenAacount(accountId);
  };
  return (
    <div
      onClick={onClick}
      className="flex items-center cursor-pointer hover:underline"
    >
      {account}
    </div>
  );
}
