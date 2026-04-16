import { describe, expect, test } from "bun:test";
import {
  listSortedPosts,
  loadCaseStudyPageModel,
  loadPersonPageModel,
  loadPostByParams,
} from "./contentService";

describe("contentService", () => {
  test("loads a post page model with rendered html and author enrichment", async () => {
    const post = await loadPostByParams({
      year: "2015",
      month: "04",
      day: "23",
      slug: "work-sustainably",
    });

    expect(post.title).toBe("Work Sustainably");
    expect(post.person?.name).toBe("Noah Callaway");
    expect(post.contentHtml).toContain("dont-work-too-much");
  });

  test("lists posts in descending date order with rendered excerpts", async () => {
    const posts = await listSortedPosts();

    expect(posts.length).toBeGreaterThan(1);
    expect(new Date(posts[0].date!).getTime()).toBeGreaterThanOrEqual(
      new Date(posts[1].date!).getTime()
    );
    expect(posts[0].excerpt?.length).toBeGreaterThan(0);
  });

  test("loads a person page model for current people", async () => {
    const pageModel = await loadPersonPageModel("noah");

    expect(pageModel).not.toBeNull();
    expect(pageModel?.person.name).toBe("Noah Callaway");
    expect(pageModel?.posts.every((post) => post.author === "noah")).toBe(true);
  });

  test("loads a case study page model with description and rendered html", async () => {
    const caseStudy = await loadCaseStudyPageModel("careviso");

    expect(caseStudy.client).toBe("careviso");
    expect(caseStudy.description.length).toBeLessThanOrEqual(120);
    expect(caseStudy.contentHtml).toContain("The Challenge");
  });
});
