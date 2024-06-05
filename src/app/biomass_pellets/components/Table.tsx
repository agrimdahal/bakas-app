import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const specifications = [
  {
    specification: "Calorific Value",
    value: "4400-5000 Kcal/kg",
  },
  {
    specification: "Moisture",
    value: " < 10%",
  },
  {
    specification: "Bulk Density",
    value: "650-750 kg/M3",
  },
  {
    specification: "Volatile Matter",
    value: "80-84%",
  },
  {
    specification: "Ash Content",
    value: "< 3%",
  },
  {
    specification: "Sulphur",
    value: "< 1%",
  },
  {
    specification: "Diameter",
    value: "5mm",
  },
  {
    specification: "Length",
    value: "5-40mm",
  },
  {
    specification: "Packaging Size",
    value: "25 & 40kg",
  }
];

export function TableDemo() {
  return (
    <div className="">
    <div className="max-w-3xl mx-auto mb-10 px-4 lg:px-0">
      <div className="">
        <h1 className="flex justify-center mb-10 text-2xl font-bold">Product Specifications</h1>
      </div>
      <Table className="w-full">
        <TableBody>
          {specifications.map((specification) => (
            <TableRow key={specification.specification}>
              <TableCell className="font-medium">{specification.specification}</TableCell>
              <TableCell>{specification.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </div>
  );
}
