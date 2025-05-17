import { sanityFetch } from "@/sanity/lib/live";
import { PAGE_QUERY, PAGES_SLUGS_QUERY } from "@/sanity/queries/page";
import
	{
		POST_QUERY,
		POSTS_QUERY,
		POSTS_SLUGS_QUERY,
	} from "@/sanity/queries/post";
import
	{
		CASE_STUDIES_QUERY,
		CASE_STUDIES_BY_TAGS_QUERY,
		CASE_STUDY_QUERY,
		CASE_STUDIES_SLUGS_QUERY,
		CASE_STUDY_TAGS_QUERY,
	} from "@/sanity/queries/case-study";
import
	{
		PAGE_QUERYResult,
		PAGES_SLUGS_QUERYResult,
		POST_QUERYResult,
		POSTS_QUERYResult,
		POSTS_SLUGS_QUERYResult,
	} from "@/sanity.types";

export const fetchSanityPageBySlug = async ({
	slug,
}: {
	slug: string;
}): Promise<PAGE_QUERYResult> =>
{
	const { data } = await sanityFetch({
		query: PAGE_QUERY,
		params: { slug },
	});

	return data;
};

export const fetchSanityPagesStaticParams =
	async (): Promise<PAGES_SLUGS_QUERYResult> =>
	{
		const { data } = await sanityFetch({
			query: PAGES_SLUGS_QUERY,
			perspective: "published",
			stega: false,
		});

		return data;
	};

export const fetchSanityPosts = async (): Promise<POSTS_QUERYResult> =>
{
	// Simple fetch without tags to avoid revalidation issues
	const { data } = await sanityFetch({
		query: POSTS_QUERY
	});

	return data;
};

export const fetchSanityPostBySlug = async ({
	slug,
}: {
	slug: string;
}): Promise<POST_QUERYResult> =>
{
	// Simple fetch without any tags or revalidation settings to avoid issues
	const { data } = await sanityFetch({
		query: POST_QUERY,
		params: { slug }
	});

	return data;
};

export const fetchSanityPostsStaticParams =
	async (): Promise<POSTS_SLUGS_QUERYResult> =>
	{
		const { data } = await sanityFetch({
			query: POSTS_SLUGS_QUERY,
			perspective: "published",
			stega: false,
		});

		return data;
	};

export const fetchSanityCaseStudies = async () =>
{
	const { data } = await sanityFetch({
		query: CASE_STUDIES_QUERY,
	});

	return data;
};

export const fetchSanityCaseStudiesByTags = async (tags: string[]) =>
{
	const { data } = await sanityFetch({
		query: CASE_STUDIES_BY_TAGS_QUERY,
		params: { tags },
	});

	return data;
};

export const fetchSanityCaseStudyBySlug = async ({
	slug,
}: {
	slug: string;
}) =>
{
	const { data } = await sanityFetch({
		query: CASE_STUDY_QUERY,
		params: { slug },
	});

	return data;
};

export const fetchSanityCaseStudiesStaticParams = async () =>
{
	const { data } = await sanityFetch({
		query: CASE_STUDIES_SLUGS_QUERY,
		perspective: "published",
		stega: false,
	});

	return data;
};

export const fetchSanityCaseStudyTags = async () =>
{
	const { data } = await sanityFetch({
		query: CASE_STUDY_TAGS_QUERY,
	});

	// Return unique tags
	return [...new Set(data)];
};
