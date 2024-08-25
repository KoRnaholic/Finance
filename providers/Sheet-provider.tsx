"use client";

import EditAccountSheet from "@/features/accounts/components/Edit-account-sheet";
import NewAccountSheet from "@/features/accounts/components/New-account-sheet";
import { useMountedState } from "react-use";

export default function SheetProvider() {
  const isMounted = useMountedState();

  if (!isMounted) return null;
  return (
    <>
      <NewAccountSheet />
      <EditAccountSheet />
    </>
  );
}
