"use client";

import EditAccountSheet from "@/features/accounts/components/Edit-account-sheet";
import NewAccountSheet from "@/features/accounts/components/New-account-sheet";

import NewCategorySheet from "@/features/categories/components/New-category-sheet";
import EditCategorySheet from "@/features/categories/components/Edit-category-sheet";
import { useMountedState } from "react-use";
import NewTransactionSheet from "@/features/transactions/components/New-transaction-sheet";

export default function SheetProvider() {
  const isMounted = useMountedState();

  if (!isMounted) return null;
  return (
    <>
      <NewAccountSheet />
      <EditAccountSheet />

      <NewCategorySheet />
      <EditCategorySheet />

      <NewTransactionSheet />
    </>
  );
}
