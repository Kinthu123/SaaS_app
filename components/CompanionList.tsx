'use client'

import { cn } from "@/lib/utils"

import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface CompanionListProps{
  title:string;
  companions:Companion[];
  classNames?:string;
}

const CompanionList = ({ title, companions, classNames }: CompanionListProps) => {
  const router = useRouter();

  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-none">
            <TableHead className="w-[50%] text-gray-500 font-normal text-base py-6">Lessons</TableHead>
            <TableHead className="text-center text-gray-500 font-normal text-base py-6">Subject</TableHead>
            <TableHead className="text-right text-gray-500 font-normal text-base py-6">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions.map((companion) => (
             <TableRow 
                key={companion.id} 
                className="hover:bg-gray-50/50 cursor-pointer border-none transition-colors duration-200"
                onClick={() => router.push(`/companion/${companion.id}`)}
              >
               <TableCell className="font-medium py-6">
                  <div className="flex items-center gap-4">
                    <div 
                      className="flex h-12 w-12 items-center justify-center rounded-xl min-w-12"
                      style={{ backgroundColor: companion.color || '#E5D0FF' }}
                    >
                      <Image 
                        src={`/icons/${companion.subject.toLowerCase()}.svg`}
                        alt={companion.subject} 
                        width={24} 
                        height={24}
                        className="opacity-80"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xl font-bold leading-none">
                        {companion.name}
                      </span>
                      <span className="text-sm text-gray-500 font-normal">Topic: {companion.topic}</span>
                     </div>
                  </div>
               </TableCell>
               <TableCell className="text-center py-6">
                  <span className="inline-block rounded-full bg-[#1C1C1E] px-5 py-2 text-sm font-medium text-white capitalize">
                    {companion.subject}
                  </span>
               </TableCell>
               <TableCell className="text-right text-xl font-normal py-6">{companion.duration} mins</TableCell>
             </TableRow>
           ))}
        </TableBody>
      </Table>
    </article>
  )
}

export default CompanionList