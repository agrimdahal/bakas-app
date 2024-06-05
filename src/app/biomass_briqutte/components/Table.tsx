import {
    Table,
    TableBody,
    TableCell,
    TableRow,
  } from "@/components/ui/table";
  
  const specifications = [
    {
      specification: " Gross Calorific Value (GCV)",
      value: "4000+ Kcal/kg",
    },
    {
      specification: "Moisture",
      value: " < 14%",
    },
    {
      specification: "Density",
      value: "800 kg/M3",
    },
    {
      specification: "Ash Content",
      value: "< 6%",
    },
    {
      specification: "Size",
      value: "90mm",
    },
    {
      specification: "Packaging Size",
      value: "25-27 kg",
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
  