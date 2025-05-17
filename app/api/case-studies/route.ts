import { NextResponse } from 'next/server';
import { fetchSanityCaseStudies, fetchSanityCaseStudiesByTags, fetchSanityCaseStudyTags } from '@/sanity/lib/fetch';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tags = searchParams.get('tags');
  
  try {
    let data;
    // If tags parameter exists, fetch by tags
    if (tags) {
      const tagArray = tags.split(',');
      data = await fetchSanityCaseStudiesByTags(tagArray);
    } else {
      data = await fetchSanityCaseStudies();
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return NextResponse.json({ error: 'Failed to fetch case studies' }, { status: 500 });
  }
} 