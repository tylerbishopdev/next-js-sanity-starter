import { NextResponse } from 'next/server';
import { fetchSanityCaseStudyTags } from '@/sanity/lib/fetch';

export async function GET()
{
	try
	{
		const data = await fetchSanityCaseStudyTags();
		return NextResponse.json({ data });
	} catch (error)
	{
		console.error('Error fetching case study tags:', error);
		return NextResponse.json({ error: 'Failed to fetch case study tags' }, { status: 500 });
	}
} 