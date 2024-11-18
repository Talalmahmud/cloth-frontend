"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

type Props = {
  headList: [];
  rowList: [];
};

export function CustomTable({ headList, rowList }: Props) {
  const deleteAction = () => {
    alert("Delete");
  };
  const editAction = () => {
    alert("Edit");
  };
  return (
    <Table>
      <TableHeader>
        <TableRow className=" text-[16px] font-bold">
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell className="text-right flex justify-end items-center gap-2 ">
              <div onClick={deleteAction}>
                <Image
                  src={"/view.svg"}
                  height={20}
                  width={20}
                  alt=""
                  className=" cursor-pointer transition-all hover:translate-y-[2px]"
                />
              </div>
              <div onClick={editAction}>
                <Image
                  src={"/edit.svg"}
                  height={20}
                  width={20}
                  alt=""
                  className=" cursor-pointer transition-all hover:translate-y-[2px] "
                />
              </div>
              <div onClick={deleteAction}>
                <Image
                  src={"/trash.svg"}
                  height={20}
                  width={20}
                  alt=""
                  className=" cursor-pointer transition-all hover:translate-y-[2px]"
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
