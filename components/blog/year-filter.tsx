"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface YearFilterProps {
  years: number[];
  selectedYear: number | null;
}

export default function YearFilter({ years, selectedYear }: YearFilterProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10 mt-10 border border-border/50 py-10 rounded-xl bg-gradient-to-b from-transparent via-muted/20 to-muted/10">
      <Link
        href="/blog"
        className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${selectedYear === null
          ? "bg-primary text-primary-foreground shadow-xl shadow-accent/20 hover:bg-primary/70 border border-accent/50"
          : "bg-muted hover:bg-muted/90 "
          }`}
      >
        All Blogs
      </Link>

      {years.map((year) => (
        <Link
          key={year}
          href={`/blog?year=${year}`}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-colors border border-muted ${selectedYear === year
            ? "bg-primary text-primary-foreground hover:bg-primary/70"
            : "bg-muted hover:bg-muted/90 "
            }`}
        >
          {year}
        </Link>
      ))}
    </div>
  );
}
