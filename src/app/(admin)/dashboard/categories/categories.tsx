import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  // DropdownMenuContent,
  // DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { ICategory } from '@/server/db/category';

export default function Categories({ category }: { category: ICategory }) {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="category image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={category?.thumbnail?.secure_url}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{category?.name}</TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize">
          {category?.status}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {category?.description}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {new Date(category?.createdAt).toLocaleDateString('en-IN')}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          {/* <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>
              <form action={deleteProduct}>
                <button type="submit">Delete</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent> */}
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}