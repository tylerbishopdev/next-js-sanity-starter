import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest)
{
	try
	{
		// Verify the request is coming from Sanity
		const body = await req.json();

		// Get the document that was changed
		const { _id, _type } = body;

		if (_type === 'post')
		{
			// Only use path-based revalidation
			revalidatePath('/blog');
			
			// If you have the slug, you can also revalidate the specific post
			const slug = body.slug?.current;
			if (slug) {
				revalidatePath(`/blog/${slug}`);
			}
		}

		return NextResponse.json({ revalidated: true, now: Date.now() });
	} catch (err)
	{
		console.error('Error revalidating:', err);
		return NextResponse.json(
			{ message: 'Error revalidating', error: err },
			{ status: 500 }
		);
	}
}

// Optionally handle GET requests for testing
export async function GET(request: NextRequest)
{
	const path = request.nextUrl.searchParams.get('path') || '/blog';
	
	// Simple path-based revalidation
	revalidatePath(path);
	
	return NextResponse.json({
		revalidated: true,
		now: Date.now(),
		path
	});
}
