import { NextResponse } from "next/server";
import Parser from "rss-parser";

const MEDIUM_FEED = "https://medium.com/feed/@cryptech_dk";
const parser = new Parser();

export async function GET() {
  try {
    const feed = await parser.parseURL(MEDIUM_FEED);

    const latestPosts = feed.items.slice(0, 3).map((item) => {
      // Extract first image from content
      const content = item.content || item["content:encoded"] || "";
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      const thumbnail = imgMatch ? imgMatch[1] : null; // fallback to null

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        thumbnail,
      };
    });

    return NextResponse.json({ posts: latestPosts });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch Medium articles" },
      { status: 500 }
    );
  }
}
