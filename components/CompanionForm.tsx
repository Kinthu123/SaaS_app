'use client'


import { useState, useRef, ChangeEvent } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  subject: z.string().min(1, { message: "Subject is required." }),
  topic: z.string().min(1, { message: "Topic is required." }),
  voice: z.string().min(1, { message: "Voice is required." }),
  style: z.string().min(1, { message: "Style is required." }),
  language: z.string().min(1, { message: "Language is required." }),
  src: z.string().optional(),
})

const CompanionForm = () => {
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const form = useForm({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      language: "English",
      src: "",
    },
  })
 
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
  }

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result as string);
            form.setValue("src", reader.result as string);
        };
        reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full max-w-3xl mx-auto py-0">
        
        {/* Image Upload Placeholder */}
        <div className="space-y-2">
            <FormLabel>Companion icon</FormLabel>
            <div className="flex items-center gap-5">
                <div className="border rounded-xl w-20 h-20 flex items-center justify-center bg-white flex-shrink-0 overflow-hidden relative">
                    {preview ? (
                        <Image 
                            src={preview} 
                            alt="Companion Preview" 
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-8 h-8 text-gray-400">
                            {/* Placeholder for image icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                        </div>
                    )}
                </div>
                 <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    className="hidden"
                    accept="image/*"
                 />
                 <Button type="button" variant="outline" onClick={triggerFileInput} className="h-[52px] px-8 border-gray-400 text-base font-normal rounded-xl hover:bg-gray-50">
                    <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                    Upload image
                 </Button>
            </div>
        </div>

        <div className="space-y-4">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="text-base font-normal text-gray-900">Companion name</FormLabel>
                <FormControl>
                    <Input placeholder="Enter the companion name - ex: Calculus King" className="h-12 border-gray-400 rounded-xl text-base px-4 placeholder:text-gray-400" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="text-base font-normal text-gray-900">Subject</FormLabel>
                <FormControl>
                    <Input placeholder="Enter the subject - ex: Math" className="h-12 border-gray-400 rounded-xl text-base px-4 placeholder:text-gray-400" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            
            <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-base font-normal text-gray-900">What should this companion teach?</FormLabel>
                    <FormControl>
                    <Input placeholder="Enter the topic you want to learn - ex: Derivatives" className="h-12 border-gray-400 rounded-xl text-base px-4 placeholder:text-gray-400" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

            <FormField
            control={form.control}
            name="voice"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="text-base font-normal text-gray-900">Voice Type</FormLabel>
                <FormControl>
                    <div className="relative">
                        <select 
                            className="flex h-12 w-full items-center justify-between rounded-xl border border-gray-400 bg-transparent px-4 py-2 text-base shadow-sm ring-offset-background placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                            {...field}
                        >
                            <option value="" disabled>Select voice type</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-5 w-5"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                    </div>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            
            <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="text-base font-normal text-gray-900">Speaking Style</FormLabel>
                <FormControl>
                     <div className="relative">
                        <select 
                            className="flex h-12 w-full items-center justify-between rounded-xl border border-gray-400 bg-transparent px-4 py-2 text-base shadow-sm ring-offset-background placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                            {...field}
                        >
                            <option value="" disabled>Select speaking style</option>
                            <option value="formal">Formal</option>
                            <option value="casual">Casual</option>
                        </select>
                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-5 w-5"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                    </div>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            
            <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="text-base font-normal text-gray-900">Language</FormLabel>
                <FormControl>
                    <div className="relative">
                        <select 
                            className="flex h-12 w-full items-center justify-between rounded-xl border border-gray-400 bg-transparent px-4 py-2 text-base shadow-sm ring-offset-background placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                            {...field}
                        >
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                        </select>
                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-5 w-5"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                    </div>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>

        <Button type="submit" className="w-full bg-[#FF5C35] hover:bg-[#ff441f] text-white font-medium h-[52px] text-lg rounded-xl mt-6">
            Build Companion
        </Button>
      </form>
    </Form>
  )
}

export default CompanionForm