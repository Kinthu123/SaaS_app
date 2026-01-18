'use client';
import Image from 'next/image';
import Link from 'next/link';

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
}
const CompanionCard = ({id, name, topic, subject, duration, color}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{backgroundColor: color}}>
        <div className="flex justify-between items-center w-full">
            <div className="subject-badge">
                {subject}
            </div>
            <button className="companion-bookmark">
                <Image src="/icons/bookmark.svg" alt="bookmark"
                width={12.5}
                height={15}
                />
            </button>
        </div>

        <div className="flex flex-col gap-3 w-full">
            <h2 className="text-2xl font-bold leading-tight">{name}</h2>
            <p className='text-sm font-medium'>Topic: {topic}</p>

            <div className="flex items-center gap-2 text-sm font-medium">
                <Image src="/icons/clock.svg" alt="duration" width={13.5} height={13.5}/>
                <p>{duration} mins duration</p>
            </div>
        </div>

        <Link href={`/companion/${id}`} className="w-full mt-auto">
            <button className="btn-primary w-full justify-center font-bold">
                Launch Lesson
            </button>
        </Link>
    </article>
  )
}

export default CompanionCard